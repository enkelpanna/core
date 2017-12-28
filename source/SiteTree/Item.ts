import { Error } from "@cogneco/mend"

export abstract class Item {
	abstract readonly type: string
	constructor(readonly region: Error.Region) {
	}
	toObject(): any & { type: string } {
		return { type: this.type }
	}
}
