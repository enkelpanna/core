import { Error } from "@cogneco/mend"
import * as Filesystem from "./Filesystem"
import * as SiteTree from "./SiteTree"
import { Parser } from "./Parser"

export class Parsers extends Parser {
	readonly extensions: { [extension: string]: "ascii" | "base64" | "binary" | "hex" | "ucs2" | "utf16le" | "utf8" | undefined } = {}
	constructor(private parsers: Parser[]) {
		super()
		for (const parser of parsers)
			this.extensions = { ...parser.extensions, ...this.extensions }
	}
	async parse(file: Filesystem.File, handler: Error.Handler): Promise<SiteTree.Item | undefined> {
		let result: SiteTree.Item | undefined
		for (const parser of this.parsers)
			if (result = await parser.parse(file, handler))
				break
		return result
	}
}
