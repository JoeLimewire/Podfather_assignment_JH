<script>
import { ref, computed } from 'vue';

export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const searchVal = ref('');
    const sortColumn = ref(null);
    const sortDirection = ref(null);

    // Changes the search value
    const onSearch = (event) => {
      searchVal.value = event.target.value;
    }

    // Sorts the data based on the column
    const onSort = (column) => {
      if (sortColumn.value === column) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
      } else {
        sortColumn.value = column;
        sortDirection.value = 'asc';
      }
    }

    // Filters and sorts the data
    const filteredData = computed(() => {

      if (sortColumn) {
        // If there is a search value, filter the data first
        return props.data.filter(row => {
          const searchTerms = Object.values(row).join(' ').toLowerCase();
          return searchTerms.includes(searchVal.value.toLowerCase());
        }).sort((a, b) => {
          const sortVal = sortDirection.value === 'asc' ? 1 : -1;
          // If the value is not a number, sort it as a string. Otherwise, sort it as a number
          const aValue = isNaN(a[sortColumn.value]) ? a[sortColumn.value] : Number(a[sortColumn.value]);
          const bValue = isNaN(b[sortColumn.value]) ? b[sortColumn.value] : Number(b[sortColumn.value]);
          return aValue > bValue ? sortVal : -sortVal;
        });
      }

      if (!searchVal.value) {
        return props.data;
      }

      return props.data.filter(row => {
        const searchTerms = Object.values(row).join(' ').toLowerCase();
        return searchTerms.includes(searchVal.value.toLowerCase());
      });
    });

    return { searchVal, onSearch, filteredData, onSort, sortColumn, sortDirection };
  }
}
</script>

<template>
  <div>
    <span class="mr-2">Search:</span>
    <input type="text" v-on:input="e => onSearch(e)" class="border p-2 rounded bg-white" />

  </div>

  <hr class="my-3">
  <div class="rounded-lg  bg-white-200 overflow-auto">
    <table v-if="filteredData.length">
      <tr>
        <th :key="cell" v-for="(cell, index) in Object.keys(filteredData[0])"
          :class="`text-left pr-3 py-1 cursor-pointer select-none ${index > 1 ? '' : ''} ${sortColumn === cell && 'bg-blue-200'}`"
          @click="() => onSort(cell)">

          {{ cell.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') }}

          <span :class="`triangle-box `">
            {{ sortColumn === cell ? (sortDirection === 'asc' ? '▲' : '▼') : ' ' }}
          </span>
        </th>
      </tr>
      <tr v-for="(row, i) in filteredData" class=" hover:bg-slate-100">
        <td v-for="(cell, j) in row" :class="`p-1 mr-4 ${j > 1 ? '' : ''}`">
          {{ cell }}
        </td>
      </tr>
    </table>
    <p v-else>No data to display</p>
  </div>
</template>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 2px solid #e2e2e2;
  text-align: left;
  padding: 8px;
  min-width: 6rem !important;
}

tr:nth-child(even) {
  background-color: #f7f7f7;
}

.triangle-box {
  min-width: 1rem;
  min-height: 1rem;

}
</style>