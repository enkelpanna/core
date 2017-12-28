import { Error } from "@cogneco/mend"
import { Block } from "./Block"

export class EmptyLine extends Block {
	readonly type = "empty_line"
	constructor(region: Error.Region) {
		super(region)
	}
}
