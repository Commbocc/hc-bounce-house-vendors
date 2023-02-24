<script setup lang="ts">
import { vendors } from "../lib/vendors";
</script>

<template>
  <p v-if="!vendors.data.length">There are currently no active vendors.</p>

  <template v-else v-for="(section, i) in vendors.sections" :key="i">
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
          <tr v-for="(vendor, i) in vendors.data" :key="i">
            <template
              v-if="
                vendor.fields.Status === 'Active' &&
                vendor.fields.Section === section
              "
            >
              <td>
                {{ vendor.fields.Name }}
              </td>

              <td>
                {{ vendor.fields.PhoneNumber }}
              </td>

              <td>
                {{
                  new Date(vendor.fields.ExpirationDate).toLocaleDateString(
                    "en-US",
                  )
                }}
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
</template>
