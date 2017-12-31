import * as Filesystem from "./Filesystem"
import { Site } from "./Site"
import { Generator } from "./Generator"

export class Generators extends Generator {
	constructor(readonly generators: { [name: string]: Generator }) {
		super()
	}
	get(name: string): Generator | undefined {
		return this.generators[name]
	}
	generate(site: Site): Filesystem.Folder {
		const result: { [name: string]: Filesystem.Node } = {}
		for (const name in this.generators)
			if (this.generators.hasOwnProperty(name))
				result[name] = this.generators[name].generate(site)
		return new Filesystem.Folder(() => Promise.resolve(result))
	}
}
