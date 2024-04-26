<script setup lang="ts">
import Heading from "./components/Heading.vue";
import TableData from "./components/TableData.vue";
import { csvToJson } from "./utils/fileTypeConversions";
import { ref, onMounted } from "vue";

const jsonData = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  const request = await fetch("/data/assignment_csv_data.csv");
  jsonData.value = await request
    .text()
    .then((txt) => {
      // throw new Error('418, I am a teapot.');
      return csvToJson(txt);
    })
    .catch((err) => {
      error.value = err;
    });
  loading.value = false;
});
</script>

<template>
  <Heading
    title="Waste Collection Data"
    msg="Joseph Higgins"
    :instructions="[
      'Use the search bar to look for specific values.',
      'Click the table headers to sort the columns in ascending or descending order.',
      'Click the `colour values` checkbox to colour the background of every unique value.',
    ]"
  />
  <div v-if="jsonData && !error">
    <TableData :data="jsonData" />
  </div>
  <div v-else-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else-if="error" class="p-5 border-2 border-red-400 bg-red-100 rounded text-red-900">
    <p>{{ error }}</p>
  </div>
</template>

<style></style>
