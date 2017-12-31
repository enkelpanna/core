export interface ISiteConfiguration {
	readonly parser: string[]
	readonly generator: string | { [name: string]: string }
}
