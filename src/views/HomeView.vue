<template>
	<div class="flex flex-col justify-between gap-10 lg:flex-row">
		<div class="w-full max-w-[500px] relative">
			<i class="pi pi-search absolute top-1/2 left-3 -translate-y-1/2"></i>
			<input
				type="text"
				class="w-full border rounded-md outline-none py-2 px-10 dark:bg-dark-blue dark:border-none"
				placeholder="Search for a country..."
				v-model="query" />
		</div>
		<select
			class="max-w-[200px] p-2 border rounded-md outline-none dark:bg-dark-blue dark:border-none"
			v-model="selectedRegion">
			<option value="" selected disabled hidden class="border-none">Filter by region</option>
			<option value="Africa">Africa</option>
			<option value="Americas">Americas</option>
			<option value="Asia">Asia</option>
			<option value="Europe">Europe</option>
			<option value="Oceania">Oceania</option>
		</select>
	</div>
	<div class="w-full flex flex-col gap-8 items-center md:flex-row md:flex-wrap">
		<div class="mt-10" v-for="country in filteredCountries" :key="country.name">
			<RouterLink :to="`/country/${country.name}`">
				<CountryCard :country="country" />
			</RouterLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import CountryCard from '@/components/ui/CountryCard.vue'
import database from '@/db/data.json'
import type { GeneralCountryInfo } from '@/types/GeneralCountryInfo'
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'


const countriesData = ref<any[]>(database)
const query = ref<string>('')
const selectedRegion = ref<string>('')

const countries = computed(() => {
	return countriesData.value.map<GeneralCountryInfo>(countryData => ({
		name: countryData.name,
		population: countryData.population,
		region: countryData.region,
		capital: countryData.capital,
		flags: {
			png: countryData.flags.png,
		},
	}))
})

const filteredCountries = computed(() => {
	return countries.value.filter(country => {
		const matchesQuery = query.value ? country.name.toLowerCase().includes(query.value.toLowerCase()) : true
		const matchesRegion = selectedRegion.value ? country.region === selectedRegion.value : true
		return matchesQuery && matchesRegion
	})
})

</script>
