import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Name", headerName: "Name", width: 130 },

  {
    field: "rate",
    headerName: "rate",
    type: "number",
    width: 90
  }
];

const rows = [
  { id: 1, Name: "Service A", rate: 35 },
  { id: 1, Name: "Service B", rate: 35 },
  { id: 1, Name: "Service C", rate: 35 },
  { id: 1, Name: "Service D", rate: 35 }
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
