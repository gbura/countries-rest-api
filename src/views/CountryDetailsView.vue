<template>
	<RouterLink
		to="/"
		class="flex items-center gap-2 shadow-md px-6 py-2 bg-white dark:bg-dark-blue rounded-md max-w-max">
		<i class="pi pi-arrow-left"></i> Back
	</RouterLink>
	<div class="mt-20 flex flex-col gap-10 md:flex-row md:justify-evenly">
		<img :src="currentCountry.flags.png" :alt="currentCountry.name" class="md:w-1/3" />
		<div>
			<h2 class="font-extrabold text-lg mb-3 md:text-2xl">{{ countryName }}</h2>
			<div class="flex flex-col gap-5 md:flex-row md:gap-10">
				<div>
					<p class="font-bold text-sm">
						Native Name: <span class="font-normal">{{ currentCountry.nativeName }}</span>
					</p>
					<p class="font-bold text-sm">
						Population: <span class="font-normal">{{ currentCountry.population.toLocaleString() }}</span>
					</p>
					<p class="font-bold text-sm">
						Region: <span class="font-normal">{{ currentCountry.region }}</span>
					</p>
					<p class="font-bold text-sm">
						Sub Region: <span class="font-normal">{{ currentCountry.subregion }}</span>
					</p>
					<p class="font-bold text-sm">
						Capital: <span class="font-normal">{{ currentCountry.capital }}</span>
					</p>
				</div>
				<div>
					<p class="font-bold text-sm">
						Top Level Domain: <span class="font-normal">{{ currentCountry.topLevelDomain.toString() }}</span>
					</p>
					<p class="font-bold text-sm flex gap-2">
						Currencies:
						<span class="font-normal" v-for="currency in currentCountry.currencies">{{ currency.name }}</span>
					</p>
					<p class="font-bold text-sm flex gap-2">
						Languages:
						<span class="font-normal">
							{{ currentCountry.languages.map((language: Language) => language.name).join(', ') }}
						</span>
					</p>
				</div>
			</div>
			<div class="mt-5 md:flex md:gap-2 md:items-center">
				<p class="font-bold">Border Countries:</p>
				<div class="flex gap-2 flex-wrap md:items-center">
					<button
						class="shadow-md px-6 py-1 bg-white dark:bg-dark-blue rounded-md max-w-max"
						v-if="currentCountry.borders"
						v-for="(border, index) in currentCountry.borders"
						:key="index">
						{{ border }}
					</button>
					<p v-else>This country don't have any borders!</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import database from '@/db/data.json'
import type { CountryDetails, Language } from '@/types/CountryDetails'
import { ref, computed } from 'vue'

const route = useRoute()
const countryName = route.params.name

const countries = ref<any[]>(database)

const currentCountry = computed(() => {
	return countries.value.find((country: CountryDetails) => country.name === countryName)
})
</script>
