<script setup lang="ts">
import { defineProps, ref } from 'vue';

defineProps<{ title: string, msg: string, instructions: string[] }>()


</script>

<template>
  <header class="mb-3">
    <img src="https://thepodfather.com/themes/ud/images/podf-logoMark.svg" alt="" width="35px" class="inline" />
    <h1 class=" text-center mb-3">{{ title }}</h1>
    <p className="text-center mb-3">{{ msg }}</p>
    <ul class="mb-[3rem]">
      <li v-for="instruction in instructions" :key="instruction">
        <small>{{ instruction }}</small>
      </li>
    </ul>
  </header>
</template>

<style scoped>
li {
  list-style-type: disc;
  margin-bottom: 0.5rem;
}
</style>
