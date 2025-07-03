import { MainContext } from "@/service/StoreContext";
import { useCustomModal } from "@/util/hooks";
import { cloneDeep, filter, find, findIndex, forEach, isEmpty } from "lodash";
import { useCallback, useContext, useEffect, useState } from "react";

const useSelectPackage = () => {
  const { dispatchGetListPackage, listPackage = [], dispatchSubmitPackage, currentAppointment } = useContext(MainContext);
  const addPackageModal = useCustomModal();
  const [selectList, setSelectList] = useState(currentAppointment?.package || []);
  // nhanh 1 doi 1

  useEffect(() => {
    dispatchGetListPackage();
  }, []);

  const findPackageRoot = (id) => {
    return find(listPackage, (item) => item?.id == id);
  };

  const groupBy = (xs, f) => {
    return xs.reduce(
      (r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r),
      {}
    );
  };

  const onSelectCallback = (selectList) => {
    //group by package
    let groupList = [];
    const result = groupBy(selectList, (c) => c.idPackage);

    for (const [key, value] of Object.entries(result)) {
      if (key == "undefined") {
        groupList = [...groupList, ...value];
      } else {
        const rootPackage = findPackageRoot(key);
        //find package root
        rootPackage["children"] = value;
        groupList = [...groupList, rootPackage];
      }
    }
    setSelectList(groupList);
    dispatchSubmitPackage(groupList);
    addPackageModal.hide();
  };

  const onRemoveItem = useCallback(
    ({ deleteId, rootId = "" }) => {
      if (!rootId) {
        const filterLlist = filter(selectList, (item) => item?.id !== deleteId);
        setSelectList(filterLlist);
        dispatchSubmitPackage(filterLlist);
      } else {
        let tmpList = cloneDeep(selectList);
        let rootIndex = findIndex(selectList, (item) => item?.id == rootId);
        tmpList[rootIndex].children = filter( // delete chilren option
          tmpList[rootIndex].children,
          (item) => item?.id !== deleteId
        );

        if (isEmpty(tmpList[rootIndex].children)) { // delete root package
          const filterLlist = filter(
            selectList,
            (item) => item?.id !== rootId
          );
          setSelectList(filterLlist);
          return;
        }
        setSelectList(tmpList);
        dispatchSubmitPackage(tmpList);
      }
    },
    [selectList]
  );

  return {
    dispatchGetListPackage,
    listPackage,
    addPackageModal,
    onSelectCallback,
    selectList,
    onRemoveItem,
  };
};

export default useSelectPackage;
