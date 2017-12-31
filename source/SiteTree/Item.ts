import { Error } from "@cogneco/mend"
let serial = 0
export abstract class Item {
	readonly serial: number
	abstract readonly type: string
	constructor(readonly region: Error.Region) {
		this.serial = serial++
	}
	toObject(): any & { type: string } {
		return { type: this.type }
	}
}
