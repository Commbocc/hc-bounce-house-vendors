import { computed, reactive } from "vue";
import api from "./api";

export const vendors = reactive<{
  loading: boolean;
  data: Vendor[];
}>({
  loading: true,
  data: [],
});

export async function fetchVendors() {
  vendors.loading = true;
  try {
    const data = await api.get<{ entries: Vendor[] }>();

    vendors.data = data.entries;
  } catch (error) {
    console.error(error);
  } finally {
    vendors.loading = false;
  }
}

export const sections = computed(() =>
  [...new Set(vendors.data.map((v) => v.section))].sort(),
);

export const sortBySection = computed(() => {
  const map: Record<string, Vendor[]> = {};

  for (const section of sections.value) {
    map[section] = vendors.data.filter((v) => v.section === section);
  }

  return map;
});
