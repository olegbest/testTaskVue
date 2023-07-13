import {getAllStops} from "@/api/stops.api";
import {ActionTree, GetterTree, MutationTree} from "vuex";
import {RootState} from "@/store/index";


interface Stop {
    line: number;
    order: number;
    stop: string;
    time: string;
}

export interface StopsState {
    stops: Stop[];
    activeLine: number | null;
    activeStop: string | null;
}

const getters: GetterTree<StopsState, RootState> = {
    uniqueLines(state) {
        const stops = state.stops;
        const allLines = stops.map((stop) => stop.line);
        const uniqueLines = Array.from(new Set(allLines));
        uniqueLines.sort((a, b) => a - b);

        return uniqueLines;
    },
    uniqueStops(state) {
        const stops = state.stops;
        const activeLine = state.activeLine
        if (!activeLine) return [];

        stops.sort((a, b) => a.order - b.order);
        const lineStops = stops.filter((stop) => stop.line === activeLine).map((stop) => stop.stop);
        const uniqueStops = new Set(lineStops);

        return Array.from(uniqueStops);
    },
    stopTimes(state) {
        const stops = state.stops;
        const activeStop = state.activeStop
        if (!activeStop) return [];

        const times = stops
            .filter((stop) => stop.stop === activeStop)
            .map((stop) => stop.time);
        times.sort((a, b) => {
            const timeA = new Date(`0 ${a}`);
            const timeB = new Date(`0 ${b}`);

            return timeA > timeB ? 1 : -1;
        });
        const uniqueTimes = new Set(times);

        return Array.from(uniqueTimes);
    }
}

const state: StopsState = {
    stops: [],
    activeLine: null,
    activeStop: null
}

const mutations: MutationTree<StopsState> = {
    SET_STOPS(state, stops) {
        state.stops = stops;
    },
    SET_ACTIVE_LINE(state, line) {
        state.activeLine = line;
    },
    SET_ACTIVE_STOP(state, stop) {
        state.activeStop = stop;
    }
}

const actions: ActionTree<StopsState, RootState> = {
    async getAllStops(context) {
        try {
            const response = await getAllStops();
            context.commit('SET_STOPS', response.data);
        } catch (e: unknown) {
            console.log(e);
        }
    }
}
export default ({
    state,
    getters,
    mutations,
    actions,
    namespaced: true
})