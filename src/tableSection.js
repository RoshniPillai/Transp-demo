import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 130 },

  {
    field: "rate",
    headerName: "rate",
    type: "number",
    width: 40
  }
];

const rows = [
  { id: 1, Name: "Service A", rate: 35 },
  { id: 2, Name: "Service B", rate: 35 },
  { id: 3, Name: "Service C", rate: 35 },
  { id: 4, Name: "Service D", rate: 35 }
];

export default function DataTable() {
  return (
    <div style={{ height: 280, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[4]}
        checkboxSelection
      />
    </div>
  );
}
