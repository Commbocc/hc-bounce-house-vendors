<script setup lang="ts">
import { vendors, fetchVendors } from "./lib/vendors";
import Vendor from "./components/Vendor.vue";

fetchVendors();

const containerClass = import.meta.env.DEV
  ? "py-5 container"
  : "container-fluid pt-2";
</script>

<template>
  <div v-if="vendors.loading" class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <article v-else :class="containerClass">
    <Vendor />
  </article>
</template>
