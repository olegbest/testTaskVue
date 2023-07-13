<template>
    <div class="card card-body border-0">
        <div class="list-group">
            <h5 class="list-group-item mb-0 border-0 mb-0">Bus stop: {{ activeStop }}</h5>
            <h6 class="list-group-item mb-0 border-0 border-bottom">Time</h6>
            <button
                    v-for="time in stopTimes"
                    :key="time"
                    class="list-group-item list-group-item-action border-start-0 border-end-0"
            >
                {{ time }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useStore} from "@/store";

const store = useStore();

const stopTimes = computed(() => {
    return store.getters['stops/stopTimes']
});

const activeStop = computed(() => store.state.stops.activeStop);
</script>