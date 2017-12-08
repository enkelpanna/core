import * as FileSystem from "./FileSystem"
import * as SiteTree from "./SiteTree"

export abstract class FileParser {
	abstract parse(input: FileSystem.File): SiteTree.Item | undefined
}
