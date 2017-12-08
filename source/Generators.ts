import * as Filesystem from "./Filesystem"
import * as SiteTree from "./SiteTree"
import { Generator } from "./Generator"

export class Generators extends Generator {
	constructor(readonly generators: { [name: string]: Generator }) {
		super()
	}
	generate(site: SiteTree.Site): Filesystem.Folder {
		const result: { [name: string]: Filesystem.Node } = {}
		for (const name in this.generators)
			if (this.generators.hasOwnProperty(name))
				result[name] = this.generators[name].generate(site)
		return new Filesystem.Folder(() => Promise.resolve(result))
	}
}
