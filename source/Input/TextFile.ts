import { File } from "./File"
export abstract class TextFile extends File {
	private contentCache: Promise<string>
	get content(): Promise<string> {
		if (!this.contentCache)
			this.contentCache = this.getContent()
		return this.contentCache
	}
	protected constructor(name: string, private getContent: () => Promise<string>) {
		super(name)
	}
}
