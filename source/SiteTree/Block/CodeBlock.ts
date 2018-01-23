import { Error } from "@cogneco/mend"
import { ContentBlock } from "./ContentBlock"
import { Inline } from "../Inline/Inline"

export class CodeBlock extends ContentBlock<Inline> {
	readonly type = "block.code"
	constructor(readonly language: string, readonly code: string, content: Inline[], region: Error.Region) {
		super(content, region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), code: this.code, language: this.language }
	}
}
