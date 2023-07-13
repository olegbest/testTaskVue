<template>

    <div class="list-group">
        <h6 class="list-group-item pb-3 mb-0 border-0 border-bottom">Bus stops <img src="@/images/Sort.svg" alt="sort">
        </h6>
        <button
                v-for="busStop in busStops"
                :key="busStop"
                class="list-group-item list-group-item-action border-start-0 border-end-0"
        >
            {{ busStop }}
        </button>
    </div>
</template>

<script setup lang="ts">
import {computed, defineProps} from "vue";
import {useStore} from "@/store";

const props = defineProps({
    search: String
});

const store = useStore();
const busStops = computed(() => {
    let stops = store.state.stops.stops;

    if (props.search) {
        stops = stops.filter((stop) => stop.stop.includes(props.search as string))
    }

    stops.sort((a, b) => {
        if (a.stop > b.stop) {
            return -1;
        }
        return 1;
    });
    const lineStops = stops.map((stop) => stop.stop);
    const uniqueStops = new Set(lineStops);

    return Array.from(uniqueStops);
});

</script>