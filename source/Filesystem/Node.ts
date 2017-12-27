import { Uri } from "@cogneco/mend"

export abstract class Node {
	readonly locator?: Uri.Locator
	protected constructor(locator?: Uri.Locator) {
		this.locator = locator
	}
}
