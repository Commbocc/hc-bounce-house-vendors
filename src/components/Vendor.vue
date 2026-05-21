<script setup lang="ts">
import { vendors, sections, sortBySection } from "../lib/vendors";
</script>

<template>
  <p v-if="!vendors.data.length">There are currently no active vendors.</p>

  <template v-else v-for="(section, i) in sections" :key="i">
    <h3>{{ section }}</h3>

    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Phone Number</th>
            <th>Expiration Date</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="vendor in sortBySection[section]" :key="vendor.uid">
            <td>
              {{ vendor.title }}
            </td>

            <td>
              <a :href="`tel:${vendor.phone_number}`">{{
                vendor.phone_number
              }}</a>
            </td>

            <td>
              {{ new Date(vendor.expiration_date).toLocaleDateString() }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
</template>
