import { Error } from "@cogneco/mend"

export abstract class Item {
	constructor(readonly region: Error.Region) {
	}
	abstract toObject(): any & { type: string }
}
