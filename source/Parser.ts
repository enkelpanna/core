import { Error } from "@cogneco/mend"
import * as Filesystem from "./Filesystem"
import * as SiteTree from "./SiteTree"

export abstract class Parser {
	abstract readonly extensions: { [extension: string]: "ascii" | "base64" | "binary" | "hex" | "ucs2" | "utf16le" | "utf8" | undefined }
	abstract async parse(file: Filesystem.File, handler: Error.Handler): Promise<SiteTree.Item | undefined>
}
