import { Node } from "../Node"
import { Error } from "@cogneco/mend"

export abstract class Block extends Node {
	constructor(region: Error.Region) {
		super(region)
	}
}
