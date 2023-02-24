import { reactive } from "vue";
import airtable from "./airtable";

export const vendors = reactive<{
  loading: boolean;
  data: Vendor[];
  sections: Vendor[];
}>({
  loading: true,
  data: [],
  sections: [],
});

export async function fetchVendors() {
  vendors.loading = true;
  try {
    const { data } = await airtable.get("/tbl8lusORSdSiVCNU", {
      params: {
        view: "Grid view",
      },
    });

    vendors.data = data.records;

    data.records.forEach((vendor: any) => {
      vendors.sections.push(vendor.fields.Section);
    });

    vendors.sections = [...new Set(vendors.sections)];
  } catch (error) {
    console.error(error);
  } finally {
    vendors.loading = false;
  }
}
