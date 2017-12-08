import { Error } from "@cogneco/mend"
import { Resource } from "./Resource"

export class BinaryResource extends Resource {
	constructor(readonly content: Uint8Array, region: Error.Region) {
		super(region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), content: JSON.stringify(this.content) }
	}
}
