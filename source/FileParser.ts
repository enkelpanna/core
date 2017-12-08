import * as Filesystem from "./Filesystem"
import * as SiteTree from "./SiteTree"

export abstract class FileParser {
	abstract parse(input: Filesystem.File): SiteTree.Item | undefined
}
