import { Uri } from "@cogneco/mend"
import { Node } from "./Node"

export class Folder extends Node {
	private getChildren: () => Promise<{ [name: string]: Node }> | { [name: string]: Node }
	private childrenCache: Promise<{ [name: string]: Node }>
	get children(): Promise<{ [name: string]: Node }> {
		if (!this.childrenCache) {
			const children = this.getChildren()
			this.childrenCache = children instanceof Promise ? children : Promise.resolve(children)
		}
		return this.childrenCache
	}
	constructor(children: { [name: string]: Node } | Promise<{ [name: string]: Node }> | (() => { [name: string]: Node }) | (() => Promise<{ [name: string]: Node }>), locator?: Uri.Locator) {
		super(locator)
		if (children instanceof Promise)
			this.childrenCache = children
		else if (children instanceof Function)
			this.getChildren = children
		else
			this.childrenCache = Promise.resolve(children)
	}
}
