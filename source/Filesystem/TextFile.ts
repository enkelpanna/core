import { Uri } from "@cogneco/mend"
import { File } from "./File"

export class TextFile extends File {
	readonly getContent: () => string | Promise<string>
	private contentCache: Promise<string>
	get content(): Promise<string> {
		if (!this.contentCache) {
			const content = this.getContent()
			this.contentCache = content instanceof Promise ? content : Promise.resolve(content)
		}
		return this.contentCache
	}
	constructor(content: string | Promise<string> | (() => string) | (() => Promise<string>), locator?: Uri.Locator) {
		super(locator)
		if (typeof(content) == "string")
			this.contentCache = Promise.resolve(content)
		else if (content instanceof Promise)
			this.contentCache = content
		else
			this.getContent = content
	}
}
