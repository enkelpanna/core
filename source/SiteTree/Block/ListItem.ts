import { Error } from "@cogneco/mend"
import { Block } from "./Block"
import { ContentBlock } from "./ContentBlock"

export class ListItem extends ContentBlock<Block> {
	constructor(content: Block[], region: Error.Region) {
		super(content, region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), type: "ListItem" }
	}
}
