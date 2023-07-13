<template>
    <div class="card card-body border-0 p-2 px-0">
        <StopsSearch v-model="search" class="mb-2 ms-2 search" />
        <StopsList :search="search" />
    </div>
</template>

<script setup lang="ts">

import StopsList from "@/components/TimeTable/TimeTableStops/StopsList.vue";
import StopsSearch from "@/components/TimeTable/TimeTableStops/StopsSearch.vue";
import {ref} from "vue";

const search = ref('');
</script>