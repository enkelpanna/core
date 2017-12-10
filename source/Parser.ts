import { Error } from "@cogneco/mend"
import * as Filesystem from "./Filesystem"
import * as SiteTree from "./SiteTree"
import { FileParser } from "./FileParser"

export class Parser {
	readonly extensions: { [extension: string]: "ascii" | "base64" | "binary" | "hex" | "ucs2" | "utf16le" | "utf8" | undefined } = {}
	constructor(private parsers: FileParser[]) {
		let extensions: { [extension: string]: "ascii" | "base64" | "binary" | "hex" | "ucs2" | "utf16le" | "utf8" | undefined } = {}
		for (const parser of parsers) {
			extensions = { ...parser.extensions, ...extensions }
		}
		this.extensions = extensions
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
					const item = this.parseFile(node)
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
	private parseFile(file: Filesystem.File): SiteTree.Item | undefined {
		let result: SiteTree.Item | undefined
		for (const parser of this.parsers)
			if (result = parser.parse(file))
				break
		return result
	}
}
