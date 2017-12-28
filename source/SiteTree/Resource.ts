import { Error } from "@cogneco/mend"
import { Item } from "./Item"

export abstract class Resource extends Item {
	protected constructor(region: Error.Region) {
		super(region)
	}
}
