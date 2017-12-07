import { ContentBlock } from "./ContentBlock"
import { ListItem } from "./ListItem"

export class UnorderedList extends ContentBlock<ListItem> {
	constructor(content: ListItem[]) {
		super(content, content.map(c => c.region).reduce((left, right) => left.merge(right)))
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), type: "UnorderedList" }
	}
}
