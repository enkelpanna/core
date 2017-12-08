import { Error } from "@cogneco/mend"
import { Item } from "../Item"

export abstract class Inline extends Item {
	constructor(region: Error.Region) {
		super(region)
	}
}
