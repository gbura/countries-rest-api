<template>
	<div class="w-full py-6 border-b-2 dark:bg-dark-blue dark:border-dark-mode-background dark:text-white">
		<header class="container flex justify-between items-center">
			<h1 class="font-bold lg:text-xl">Where in the world?</h1>
			<button @click="toggleDark()" class="font-semibold flex items-center gap-2">
				<i :class="isDark ? 'pi pi-sun' : 'pi pi-moon'"></i>
				{{ darkModeText }}
			</button>
		</header>
	</div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { computed } from 'vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const darkModeText = computed(() => (isDark.value ? 'Light Mode' : 'Dark Mode'))
</script>
