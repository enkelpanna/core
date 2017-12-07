import * as SiteTree from "./SiteTree"
import * as Input from "./Input"

export abstract class Parser {
	abstract parse(input: Input.Folder): SiteTree.Site | undefined
}
