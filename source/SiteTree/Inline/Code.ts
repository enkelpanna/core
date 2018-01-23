import { Error } from "@cogneco/mend"
import { Inline } from "./Inline"

export class Code extends Inline {
	readonly type = "inline.code"
	constructor(readonly content: string, region: Error.Region) {
		super(region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), content: this.content }
	}
}
