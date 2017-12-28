import { Error } from "@cogneco/mend"
import { Item } from "../Item"
import { Block } from "./Block"

export abstract class ContentBlock<T extends Item> extends Block {
	constructor(readonly content: T[], region: Error.Region) {
		super(region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), content: this.content.map(c => c.toObject()) }
	}
}
