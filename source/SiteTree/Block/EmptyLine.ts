import { Error } from "@cogneco/mend"
import { Block } from "./Block"

export class EmptyLine extends Block {
	constructor(region: Error.Region) {
		super(region)
	}
	toObject(): any & { type: string } {
		return { type: "EmptyLine" }
	}
}
