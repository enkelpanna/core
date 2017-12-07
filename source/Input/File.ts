import { Node } from "./Node"
export abstract class File extends Node {
	protected constructor(name: string) {
		super(name)
	}
}
