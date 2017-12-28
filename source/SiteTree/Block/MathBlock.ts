import { Error } from "@cogneco/mend"
import { ContentBlock } from "./ContentBlock"
import { Inline } from "../Inline/Inline"

export class MathBlock extends ContentBlock<Inline> {
	readonly type = "math_block"
	constructor(readonly math: string, content: Inline[], region: Error.Region) {
		super(content, region)
	}
}
