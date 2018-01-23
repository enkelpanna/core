import { Error } from "@cogneco/mend"
import { Block } from "./Block"

export class EmptyLine extends Block {
	readonly type = "block.emptyLine"
	constructor(region: Error.Region) {
		super(region)
	}
}
