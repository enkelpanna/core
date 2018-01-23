import { Error } from "@cogneco/mend"
import { ContentInline } from "./ContentInline"
import { Inline } from "./Inline"

export class Emphasize extends ContentInline {
	readonly type = "inline.emphasize"
	constructor(content: Inline[], region: Error.Region) {
		super(content, region)
	}
}
