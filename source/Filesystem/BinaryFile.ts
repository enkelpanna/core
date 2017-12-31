import { Uri } from "@cogneco/mend"
import { File } from "./File"

export class BinaryFile extends File {
	private getContent: () => Uint8Array | Promise<Uint8Array>
	private contentCache: Promise<Uint8Array>
	get content(): Promise<Uint8Array> {
		if (!this.contentCache) {
			const content = this.getContent()
			this.contentCache = content instanceof Promise ? content : Promise.resolve(content)
		}
		return this.contentCache
	}
	constructor(content: Uint8Array | Promise<Uint8Array> | (() => Uint8Array) | (() => Promise<Uint8Array>), locator?: Uri.Locator) {
		super(locator)
		if (content instanceof Uint8Array)
			this.contentCache = Promise.resolve(content)
		else if (content instanceof Promise)
			this.contentCache = content
		else
			this.getContent = content
	}
}
