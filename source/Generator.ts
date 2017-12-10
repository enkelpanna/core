import * as Filesystem from "./Filesystem"
import { Site } from "./Site"

export abstract class Generator {
	abstract generate(site: Site): Promise<Filesystem.Folder>
}
