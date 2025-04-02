import { MainContext } from "@/service/StoreContext";
import { useCustomModal } from "@/util/hooks";
import { find, findIndex, forEach } from "lodash";
import { useContext, useEffect, useState } from "react";

const useSelectPackage = () => {
  const { dispatchGetListPackage, listPackage = [] } = useContext(MainContext);
  const addPackageModal = useCustomModal();
  const [selectList, setSelectList] = useState([]);

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
    console.log("!!!!!!!!!!!!!! result ", result);

    for (const [key, value] of Object.entries(result)) {
      console.log("!!!!!! key value ", key, value);
      if (key == "undefined") {
        groupList = [...groupList, ...value]
      } else {
        const rootPackage = findPackageRoot(key);
				console.log("!!!!!! find root ", key, rootPackage);
        rootPackage["children"] = value;
        groupList = [...groupList, rootPackage]
      }
    }

    setSelectList(groupList);
    addPackageModal.hide();
  };

  return {
    dispatchGetListPackage,
    listPackage,
    addPackageModal,
    onSelectCallback,
    selectList,
  };
};

export default useSelectPackage;
