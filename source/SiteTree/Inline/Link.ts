import { Error } from "@cogneco/mend"
import { ContentInline } from "./ContentInline"
import { Inline } from "./Inline"

export class Link extends ContentInline {
	readonly type = "link"
	constructor(readonly target: string, content: Inline[], region: Error.Region) {
		super(content, region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), target: this.target }
	}
}
