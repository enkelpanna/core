import { Error } from "@cogneco/mend"
import * as FileSystem from "./FileSystem"
import * as SiteTree from "./SiteTree"
import { FileParser } from "./FileParser"

export class Parser {
	constructor(private parsers: FileParser[]) {
	}
	parse(folder: FileSystem.Folder): SiteTree.Page {
		let meta: { [key: string]: any } = {}
		let content: SiteTree.Block.Block[] = []
		let pages: { [name: string]: SiteTree.Page } = {}
		let resources: { [name: string]: SiteTree.Resource } = {}
		let region: Error.Region
		for (const name in folder.children) {
			if (folder.children.hasOwnProperty(name)) {
				const node: FileSystem.Node = folder.children[name]
				if (node instanceof FileSystem.Folder) {
					const item = this.parse(node)
					if (item instanceof SiteTree.Page)
						pages = { name: item, ...pages }
				} else if (node instanceof FileSystem.File) {
					const item = this.parseFile(node)
					if (item instanceof SiteTree.Page) {
						meta = { ...item.meta, ...meta }
						content = [ ...content, ...item.content ]
						pages = { ...item.pages, ...pages }
						resources = { ...item.resources, ...resources }
						region = region.merge(item.region)
					} else if (item instanceof SiteTree.Resource)
						resources = { name: item, ...resources }
				}
			}
		}
		return new SiteTree.Page(meta, content, pages, resources, region)
	}
	private parseFile(file: FileSystem.File): SiteTree.Item {
		let result: SiteTree.Item
		for (const parser of this.parsers)
			if (result = parser.parse(file))
				break
		return result
	}
}
