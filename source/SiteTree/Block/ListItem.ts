import { Error } from "@cogneco/mend"
import { Block } from "./Block"
import { ContentBlock } from "./ContentBlock"

export class ListItem extends ContentBlock<Block> {
	readonly type = "block.list.item"
	constructor(content: Block[], region: Error.Region) {
		super(content, region)
	}
}
