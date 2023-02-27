import { computed, reactive } from 'vue'
import airtable from './airtable'

export const vendors = reactive<{
  loading: boolean
  data: Vendor[]
}>({
  loading: true,
  data: [],
})

export async function fetchVendors() {
  vendors.loading = true
  try {
    const { data } = await airtable.get('/tbl8lusORSdSiVCNU', {
      params: {
        view: 'Grid view',
      },
    })

    vendors.data = data.records
  } catch (error) {
    console.error(error)
  } finally {
    vendors.loading = false
  }
}

export const sections = computed(() =>
  [...new Set(vendors.data.map((v) => v.fields.Section))].sort()
)
