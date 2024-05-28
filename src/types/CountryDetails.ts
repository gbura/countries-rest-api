type Currency = {
	name: string
}

export type Language = {
	name: string
}

export type CountryDetails = {
	name: string
	nativeName: string
	population: number
	region: string
	subregion: string
	capital: string
	topLevelDomain: string[]
	currencies: Currency[]
	languages: Language[]
	borders: string[]
	flags: {
		png: string
	}
}
