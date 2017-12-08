import { File } from "./File"

export class BinaryFile extends File {
	private contentCache: Promise<Uint8Array>
	get content(): Promise<Uint8Array> {
		if (!this.contentCache)
			this.contentCache = this.getContent()
		return this.contentCache
	}
	constructor(private getContent: () => Promise<Uint8Array>) {
		super()
	}
}
