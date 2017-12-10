export interface ISiteConfiguration {
	readonly title: string
	readonly parser: string[]
	readonly generator: string | { [name: string]: string }
}
