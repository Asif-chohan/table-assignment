import { useState } from "react";

function useTableHandler(initData) {
  const [data, setData] = useState(initData);

  const rowAddHandler = (newData) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        setData([newData, ...data]);

        resolve();
      }, 1000);
    });

  const rowUpdateHandler = (newData, oldData) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataUpdate = [...data];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setData([...dataUpdate]);

        resolve();
      }, 1000);
    });

  const rowDeleteHandler = (oldData) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);

        resolve();
      }, 1000);
    });

  return { data, rowAddHandler, rowUpdateHandler, rowDeleteHandler };
}

export default useTableHandler;
