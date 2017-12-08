import * as FileSystem from "./FileSystem"
import * as SiteTree from "./SiteTree"
import { Generator } from "./Generator"

export class Generators extends Generator {
	constructor(readonly generators: { [name: string]: Generator }) {
		super()
	}
	generate(site: SiteTree.Site): FileSystem.Folder {
		const result: { [name: string]: FileSystem.Node } = {}
		for (const name in this.generators)
			if (this.generators.hasOwnProperty(name))
				result[name] = this.generators[name].generate(site)
		return new FileSystem.Folder(() => Promise.resolve(result))
	}
}
