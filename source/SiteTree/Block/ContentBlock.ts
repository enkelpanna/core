import { Error } from "@cogneco/mend"
import { Node } from "../Node"
import { Block } from "./Block"

export abstract class ContentBlock<T extends Node> extends Block {
	constructor(readonly content: T[], region: Error.Region) {
		super(region)
	}
	toObject(): any & { type: string } {
		return { content: this.content.map(c => c.toObject()) }
	}
}
