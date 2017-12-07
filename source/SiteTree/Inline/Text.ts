import { Error } from "@cogneco/mend"
import { Inline } from "./Inline"

export class Text extends Inline {
	constructor(readonly value: string, region: Error.Region) {
		super(region)
	}
	toObject(): any & { type: string } {
		return { type: "Text", value: this.value }
	}
}
