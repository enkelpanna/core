import * as FileSystem from "./FileSystem"
import * as SiteTree from "./SiteTree"

export abstract class Generator {
	abstract generate(site: SiteTree.Site): FileSystem.Folder
}
