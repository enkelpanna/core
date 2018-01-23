import { Error } from "@cogneco/mend"
import { Inline } from "./Inline"

export class Text extends Inline {
	readonly type = "inline.text"
	constructor(readonly value: string, region: Error.Region) {
		super(region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), value: this.value }
	}
}
