<template>
    <div class="card card-body border-0">
        <h5 class="card-title">Select bus lines</h5>
        <div>
            <button
                    v-for="line in lines"
                    :key="line"
                    type="button"
                    class="btn btn-primary btn-sm m-1"
                    :class="line === activeLine ? 'active': ''"
                    @click="setActiveLine(line)"
            >
                {{ line }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useStore} from "@/store";

const store = useStore();

const lines = computed<number[]>(() => store.getters['stops/uniqueLines'])

const activeLine = computed({
    get() {
        return store.state.stops.activeLine;
    },
    set(line) {
        store.commit('stops/SET_ACTIVE_LINE', line);
    }
})

const activeStop = computed({
    get() {
        return store.state.stops.activeStop;
    },
    set(stop) {
        store.commit('stops/SET_ACTIVE_STOP', stop);
    }
});

function setActiveLine(line: number) {
    activeLine.value = line;
    activeStop.value = null;
}
</script>

<style scoped>

</style>