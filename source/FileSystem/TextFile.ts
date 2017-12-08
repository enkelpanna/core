import { File } from "./File"

export class TextFile extends File {
	private contentCache: Promise<string>
	get content(): Promise<string> {
		if (!this.contentCache)
			this.contentCache = this.getContent()
		return this.contentCache
	}
	constructor(private getContent: () => Promise<string>) {
		super()
	}
}
