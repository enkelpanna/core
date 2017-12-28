import { Error } from "@cogneco/mend"
import { ContentBlock } from "./ContentBlock"
import { Inline } from "../Inline/Inline"

export class Video extends ContentBlock<Inline> {
	get sourceType(): string | undefined {
		let result: string | undefined
		const match = this.source.match(/\.([a-z,A-Z,0-9]+)$/)
		if (match && match.length > 1)
			switch (match[1]) {
				case "ogg":
					result = "video/ogg"
					break
				case "mp4":
					result = "video/mp4"
					break
				default:
					break
			}
		return result
	}
	constructor(readonly source: string, readonly classes: string[], content: Inline[], region: Error.Region) {
		super(content, region)
	}
	toObject(): any & { type: string } {
		return { ...super.toObject(), type: "Video", source: this.source, classes: this.classes }
	}
}
