import { Error } from "@cogneco/mend"
import { Inline } from "./Inline"

export class Math extends Inline {
	readonly type = "inline.math"
	constructor(readonly content: string, region: Error.Region) {
		super(region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), content: this.content }
	}
}
