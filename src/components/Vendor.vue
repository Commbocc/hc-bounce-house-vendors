<script setup lang="ts">
import { vendors, sections } from "../lib/vendors";
</script>

<template>
  <p v-if="!vendors.data.length">There are currently no active vendors.</p>

  <template v-else v-for="(section, i) in sections" :key="i">
    <h3>{{ section }}</h3>

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th width="50%">Company Name</th>
            <th>Phone Number</th>
            <th>Expiration Date</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="vendor in vendors.data.filter(
              (v) =>
                v.fields.Section === section && v.fields.Status === 'Active',
            )"
            :key="vendor.id"
          >
            <td>
              {{ vendor.fields.Name }}
            </td>

            <td>
              {{ vendor.fields.PhoneNumber }}
            </td>

            <td>
              {{ new Date(vendor.fields.ExpirationDate).toLocaleDateString() }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
</template>
