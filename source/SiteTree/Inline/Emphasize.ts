import { Error } from "@cogneco/mend"
import { ContentInline } from "./ContentInline"
import { Inline } from "./Inline"

export class Emphasize extends ContentInline {
	constructor(content: Inline[], region: Error.Region) {
		super(content, region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), type: "Emphasize" }
	}
}
