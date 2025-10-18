// lib/datatables.ts
import jquery from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";

// Attach jQuery to window before importing DataTables
if (typeof window !== "undefined") {
  (window as unknown as { jQuery: typeof jquery; $: typeof jquery }).jQuery = jquery;
  (window as unknown as { jQuery: typeof jquery; $: typeof jquery }).$ = jquery;
}


export const $ = jquery;
