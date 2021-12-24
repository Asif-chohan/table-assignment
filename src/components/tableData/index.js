import { useState } from "react";
import MaterialTable from "material-table";
import tableInitData from "./data";
import useTableHandler from "../../customHooks/useTableHandler";
import { styles } from "./style";

const columns = [
  { title: "Name", field: "name" },
  {
    title: "Address",
    field: "address",
  },
  { title: "Date of Birth", field: "DOB", type: "date" },
  {
    title: "Phone Number",
    field: "phone",
    type: "tel",
  },
];

function TableData() {
  const { data, rowAddHandler, rowUpdateHandler, rowDeleteHandler } =
    useTableHandler(tableInitData);

  return (
    <div style={styles.tableCont}>
      <MaterialTable
        title="Table Data Assignment"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: rowAddHandler,
          onRowUpdate: rowUpdateHandler,
          onRowDelete: rowDeleteHandler,
        }}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "first",
        }}
      />
    </div>
  );
}

export default TableData;
