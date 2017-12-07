import { Error } from "@cogneco/mend"
import { Inline } from "./Inline"

export abstract class ContentInline extends Inline {
	constructor(readonly content: Inline[], region: Error.Region) {
		super(region)
	}
	toObject(): any & { type: string } {
		return { "content": this.content.map(c => c.toObject()) }
	}
}
