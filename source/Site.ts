import { Error } from "@cogneco/mend"
import { Parser } from "./Parser"
import { Parsers } from "./Parsers"
import { Generator } from "./Generator"
import { Page } from "./SiteTree/Page"
import { ISiteConfiguration } from "./ISiteConfiguration"
import { Generators } from "./Generators"
import * as Filesystem from "./Filesystem"
import * as SiteTree from "./SiteTree"

export class Site {
	private rootCache: Page
	get root(): Page { return this.rootCache }
	get extensions(): { [extension: string]: "ascii" | "base64" | "binary" | "hex" | "ucs2" | "utf16le" | "utf8" | undefined } { return this.parser.extensions }
	private constructor(
		readonly configuration: ISiteConfiguration,
		readonly parser: Parser,
		readonly generator: Generator,
		readonly handler: Error.Handler = new Error.ConsoleHandler(),
	)
	{ }
	async load(folder: Filesystem.Folder): Promise<void> {
		this.rootCache = await this.parse(folder)
	}
	async parse(folder: Filesystem.Folder): Promise<SiteTree.Page> {
		let meta: { [key: string]: any } = {}
		let content: SiteTree.Block.Block[] = []
		let pages: { [name: string]: SiteTree.Page } = {}
		let resources: { [name: string]: SiteTree.Resource } = {}
		let region: Error.Region | undefined
		for (const name in folder.children) {
			if (folder.children.hasOwnProperty(name)) {
				const node: Filesystem.Node = (await folder.children)[name]
				if (node instanceof Filesystem.Folder) {
					const item = this.parse(node)
					if (item instanceof SiteTree.Page)
						pages = { name: item, ...pages }
				} else if (node instanceof Filesystem.File) {
					const item = this.parser.parse(node, this.handler)
					if (item instanceof SiteTree.Page) {
						meta = { ...item.meta, ...meta }
						content = [ ...content, ...item.content ]
						pages = { ...item.pages, ...pages }
						resources = { ...item.resources, ...resources }
						region = region ? region.merge(item.region) : item.region
					} else if (item instanceof SiteTree.Resource)
						resources = { name: item, ...resources }
				}
			}
		}
		return new SiteTree.Page(meta, content, pages, resources, region || new Error.Region(""))
	}
	generate(name?: string): Filesystem.Folder {
		return (name && this.generator instanceof Generators && this.generator.get(name) || this.generator).generate(this)
	}
	static async create(configuration: ISiteConfiguration, fetchParser: (locator: string) => Promise<Parser>, fetchGenerator: (locator: string) => Promise<Generator>): Promise<Site> {
		return new Site(configuration, new Parsers(await Promise.all(configuration.parser.map(fetchParser))), await Site.fetchGenerators(configuration.generator, fetchGenerator))
	}
	private static async fetchGenerators(generator: string | { [name: string]: string }, fetch: (locator: string) => Promise<Generator>): Promise<Generator> {
		let result: Generator
		if (typeof generator === "string")
			result = await fetch(generator)
		else {
			const results: { [name: string]: Generator } = {}
			for (const name in generator)
			if (generator.hasOwnProperty(name))
				results[name] = await fetch(generator[name])
			result = new Generators(results)
		}
		return result
	}
}
