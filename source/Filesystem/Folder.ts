import { Node } from "./Node"

export class Folder extends Node {
	private childrenCache: Promise<{ [name: string]: Node }>
	get children(): Promise<{ [name: string]: Node }> {
		if (!this.childrenCache)
			this.childrenCache = this.getChildren()
		return this.childrenCache
	}
	constructor(private getChildren: () => Promise<{ [name: string]: Node }>) {
		super()
	}
}
