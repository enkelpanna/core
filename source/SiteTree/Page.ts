import { Error } from "@cogneco/mend"
import { Node } from "./Node"
import { Block } from "./Block/Block"
import { Resource } from "./Resource"

export class Page extends Node {
	constructor(
		readonly title: string,
		readonly meta: { [key: string]: any },
		readonly content: Block[],
		readonly pages: Page[],
		readonly resources: Resource[],
		region: Error.Region,
	) {
		super(region)
	}
	toObject(): any & { type: string } {
		return { type: "Page", content: JSON.stringify(this.content.map(element => element.toObject())) }
	}
}
