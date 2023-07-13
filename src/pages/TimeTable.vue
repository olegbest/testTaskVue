<template>
  <div>
      <h4 class="mb-4">TimeTable</h4>

      <ul class="nav nav-pills bg-white px-4 my-3 rounded">
          <li class="nav-item">
              <router-link active-class="active" class="py-3 nav-link" to="/lines">Bus lines</router-link>
          </li>
          <li class="nav-item">
              <router-link active-class="active" class="py-3 nav-link" to="/stops">Stops</router-link>
          </li>
      </ul>

      <router-view class="my-3" />
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount} from "vue";
import { useRouter, useRoute } from "vue-router";
import {useStore} from "@/store";

onBeforeMount(() => {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    store.dispatch('stops/getAllStops');
    if (route.path === '/') {
        router.push('/lines');
    }
});

</script>

<style scoped>
.nav-pills .nav-link {
    color: #9A9DA4;
}
.nav-pills .nav-link.active {
    background: transparent;
    color: #1A1A1A;
    border-bottom: 2px solid var(--bs-primary);
    border-radius: 0;
}
</style>