import { Uri } from "@cogneco/mend"
import { Node } from "./Node"

export abstract class File extends Node {
	protected constructor(locator?: Uri.Locator) {
		super(locator)
	}
}
