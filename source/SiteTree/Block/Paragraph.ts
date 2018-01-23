import { ContentBlock } from "./ContentBlock"
import { Inline } from "../Inline/Inline"

export class Paragraph extends ContentBlock<Inline> {
	readonly type = "block.paragraph"
	constructor(content: Inline[]) {
		super(content, content.map(c => c.region).reduce((left, right) => left.merge(right)))
	}
}
