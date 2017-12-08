import { Page } from "./Page"
import { ISiteConfiguration } from "../ISiteConfiguration"

export class Site {
	constructor(readonly root: Page, readonly configuration: ISiteConfiguration) {
	}
}
