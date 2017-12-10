import { FileParser } from "./FileParser"
import { Generator } from "./Generator"
import { Parser } from "./Parser"
import { Page } from "./SiteTree/Page"
import { ISiteConfiguration } from "./ISiteConfiguration"
import { Generators } from "./Generators"
import * as Filesystem from "./Filesystem"

export class Site {
	private rootCache: Page
	get root(): Page { return this.rootCache }
	get extensions(): { [extension: string]: "ascii" | "base64" | "binary" | "hex" | "ucs2" | "utf16le" | "utf8" | undefined } { return this.parser.extensions }
	private constructor(
		readonly configuration: ISiteConfiguration,
		readonly parser: Parser,
		readonly generator: Generator,
	)
	{ }
	async load(folder: Filesystem.Folder): Promise<void> {
		this.rootCache = await this.parser.parse(folder)
	}
	generate(name?: string): Promise<Filesystem.Folder> {
		return (name && this.generator instanceof Generators && this.generator.get(name) || this.generator).generate(this)
	}
	static async create(configuration: ISiteConfiguration, fetchParser: (locator: string) => Promise<FileParser>, fetchGenerator: (locator: string) => Promise<Generator>): Promise<Site> {
		return new Site(configuration, new Parser(await Promise.all(configuration.parser.map(fetchParser))), await Site.fetchGenerators(configuration.generator, fetchGenerator))
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
