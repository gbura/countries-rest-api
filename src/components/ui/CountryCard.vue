<template>
	<div class="bg-white rounded-lg overflow-hidden w-[320px] shadow-md dark:bg-dark-blue">
		<img :src="flags.png" alt="" class="h-[180px] w-full" />
		<div class="p-4">
			<h2 class="mb-2 font-extrabold text-lg">{{ name }}</h2>
			<div>
				<p class="text-sm font-bold">
					Population: <span class="font-normal">{{ population.toLocaleString() }}</span>
				</p>
				<p class="text-sm font-bold">
					Region: <span class="font-normal">{{ region }}</span>
				</p>
				<p class="text-sm font-bold">
					Capital: <span class="font-normal">{{ capital }}</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { GeneralCountryInfo } from '@/types/GeneralCountryInfo'
import { toRefs } from 'vue'
const props = defineProps<{
	country: GeneralCountryInfo
}>()

const { name, population, region, capital, flags } = toRefs(props.country)
</script>
