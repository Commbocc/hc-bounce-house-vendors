<script setup lang="ts">
import { vendors } from "../lib/vendors";
</script>

<template>
  <p v-if="!vendors.data.length">There are currently no active vendors.</p>

  <div v-else class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Phone Number</th>
          <th>Expiration Date</th>
          <th>Section</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(vendor, i) in vendors.data" :key="i">
          <td>{{ vendor.fields.Name }}</td>

          <td>{{ vendor.fields.PhoneNumber }}</td>

          <td>
            {{
              new Date(vendor.fields.ExpirationDate).toLocaleDateString("en-US")
            }}
          </td>

          <td>{{ vendor.fields.Section }}</td>

          <td>{{ vendor.fields.Status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
