<template>
	<TheHeader />
	<div class="container mt-8">
		<RouterView />
	</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/layouts/TheHeader.vue'
</script>
