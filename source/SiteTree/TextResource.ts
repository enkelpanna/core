import { Error } from "@cogneco/mend"
import { Resource } from "./Resource"

export class TextResource extends Resource {
	readonly type = "resource.text"
	constructor(readonly content: string, region: Error.Region) {
		super(region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), content: this.content }
	}
}
