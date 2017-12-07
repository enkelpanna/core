import { Error } from "@cogneco/mend"
import { ContentBlock } from "./ContentBlock"
import { Inline } from "../Inline/Inline"

export class MathBlock extends ContentBlock<Inline> {
	constructor(readonly math: string, content: Inline[], region: Error.Region) {
		super(content, region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), type: "MathBlock", math: this.math }
	}
}
