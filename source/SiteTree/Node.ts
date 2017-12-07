import { Error } from "@cogneco/mend"

export abstract class Node {
	constructor(readonly region: Error.Region) {
	}
	abstract toObject(): any & { type: string }
}
