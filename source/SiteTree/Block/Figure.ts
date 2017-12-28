import { Error } from "@cogneco/mend"
import { ContentBlock } from "./ContentBlock"
import { Inline } from "../Inline/Inline"

export class Figure extends ContentBlock<Inline> {
	constructor(readonly source: string, readonly classes: string[], content: Inline[], region: Error.Region) {
		super(content, region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), type: "Figure", source: this.source, classes: this.classes }
	}
}
