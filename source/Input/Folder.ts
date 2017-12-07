import { Node } from "./Node"
export class Folder extends Node {
	constructor(name: string, readonly children: () => Promise<File[]>) {
		super(name)
	}
}
