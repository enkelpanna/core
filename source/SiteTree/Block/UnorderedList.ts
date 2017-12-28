import { ContentBlock } from "./ContentBlock"
import { ListItem } from "./ListItem"

export class UnorderedList extends ContentBlock<ListItem> {
	readonly type = "unordered_list"
	constructor(content: ListItem[]) {
		super(content, content.map(c => c.region).reduce((left, right) => left.merge(right)))
	}
}
