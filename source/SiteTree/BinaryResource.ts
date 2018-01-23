import { Error } from "@cogneco/mend"
import { Resource } from "./Resource"

export class BinaryResource extends Resource {
	readonly type = "resource.binary"
	constructor(readonly content: Uint8Array, region: Error.Region) {
		super(region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), content: this.content }
	}
}
