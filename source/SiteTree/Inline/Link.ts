import { Error } from "@cogneco/mend"
import { ContentInline } from "./ContentInline"
import { Inline } from "./Inline"

export class Link extends ContentInline {
	constructor(readonly target: string, content: Inline[], region: Error.Region) {
		super(content, region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), type: "Link", target: this.target }
	}
}
