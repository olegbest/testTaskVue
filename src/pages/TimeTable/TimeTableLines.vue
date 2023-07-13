<template>
    <div>
        <BusLinesList class="my-3"/>
        <div class="d-flex align-items-start">
            <BusStopsList v-if="activeLine" class="col-1 me-3 px-0 overflow-auto"/>
            <EmptyBlock
                    v-else
                    :message="messages[0]"
                    class="col-1 me-3"
            />
            <StopTimesList v-if="activeLine && activeStop" class="col-1 px-0 overflow-auto"/>
            <EmptyBlock v-else :message="emptyTimeMessage" class="col-1" />
        </div>
    </div>
</template>

<script setup lang="ts">
import BusLinesList from "@/components/TimeTable/TimeTableLines/BusLinesList.vue";
import BusStopsList from "@/components/TimeTable/TimeTableLines/BusStopsList.vue";
import StopTimesList from "@/components/TimeTable/TimeTableLines/StopTimesList.vue";
import EmptyBlock from "@/components/TimeTable/TimeTableLines/EmptyBlock.vue";
import {computed} from "vue";
import {useStore} from "@/store";

const store = useStore();
const activeLine = computed(() => store.state.stops.activeLine);
const activeStop = computed(() => store.state.stops.activeStop);
const messages = ['Please select the bus line first', 'Please select the bus stop first']
const emptyTimeMessage = computed(() => activeLine.value ? messages[1] : messages[0]);

</script>


<style scoped>
.col-1 {
    height: 444px;
}
</style>