import { Error } from "@cogneco/mend"
import { Item } from "./Item"
import { Block } from "./Block/Block"
import { Resource } from "./Resource"

export class Page extends Item {
	constructor(
		readonly meta: { [key: string]: any },
		readonly content: Block[],
		readonly pages: { [name: string]: Page },
		readonly resources: { [name: string]: Resource },
		region: Error.Region,
	) {
		super(region)
	}
	toObject(): any & { type: string } {
		return { type: "Page", content: this.content.map(element => element.toObject()) }
	}
	merge(other: Page): Page {
		return new Page({ ...other.meta, ...this.meta }, this.content.concat(other.content), { ...other.pages, ...this.pages }, { ...other.resources, ...this.resources }, this.region.merge(other.region))
	}
}
