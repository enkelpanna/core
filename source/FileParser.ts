import * as Filesystem from "./Filesystem"
import * as SiteTree from "./SiteTree"

export abstract class FileParser {
	abstract readonly extensions: { [extension: string]: "ascii" | "base64" | "binary" | "hex" | "ucs2" | "utf16le" | "utf8" | undefined }
	abstract parse(input: Filesystem.File): SiteTree.Item | undefined
}
