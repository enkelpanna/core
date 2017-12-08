import { Item } from "../Item"
import { Error } from "@cogneco/mend"

export abstract class Block extends Item {
	constructor(region: Error.Region) {
		super(region)
	}
}
