import { Error } from "@cogneco/mend"
import { Inline } from "./Inline"

export class Math extends Inline {
	constructor(readonly content: string, region: Error.Region) {
		super(region)
	}
	toObject(): any & { type: string } {
		return { type: "Math", content: this.content }
	}
}
