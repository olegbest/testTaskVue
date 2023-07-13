<template>
    <div class="card card-body border-0">
        <div class="list-group">
            <h5 class="list-group-item border-0 mb-0">Bus line: {{ activeLine }}</h5>
            <h6 class="list-group-item pb-3 mb-0 border-0 border-bottom">Bus stops <img src="@/images/Sort.svg" alt="sort"></h6>
            <button
                    v-for="busStop in busStops"
                    :key="busStop"
                    class="list-group-item list-group-item-action border-start-0 border-end-0"
                    @click="setStop(busStop)"
            >
                {{ busStop }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useStore} from "@/store";

const store = useStore();
const busStops = computed<string[]>(() => store.getters['stops/uniqueStops']);
const activeLine = computed(() => store.state.stops.activeLine);

const activeStop = computed({
    get() {
        return store.state.stops.activeStop;
    },
    set(stop) {
        store.commit('stops/SET_ACTIVE_STOP', stop);
    }
})

function setStop(stop: string) {
    activeStop.value = stop;
}
</script>