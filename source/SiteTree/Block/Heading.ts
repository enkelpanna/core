import { Error } from "@cogneco/mend"
import { ContentBlock } from "./ContentBlock"
import { Inline } from "../Inline/Inline"

export class Heading extends ContentBlock<Inline> {
	constructor(readonly level: number, content: Inline[], region: Error.Region) {
		super(content, region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), type: "Heading", level: this.level }
	}
}
