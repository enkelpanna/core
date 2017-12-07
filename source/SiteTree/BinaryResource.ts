import { Resource } from "./Resource"

export class BinaryResource extends Resource {
	constructor(name: string, content: Uint8Array) {
		super(name)
	}
}
