import { MainContext } from "@/service/StoreContext";
import { useCustomModal } from "@/util/hooks";
import { useContext, useEffect, useState } from "react";

const useSelectPackage = () => {
  const { dispatchGetListPackage, listPacckage = [] } = useContext(MainContext);
	const addPackageModal = useCustomModal();
	const [selectList, setSelectList] = useState([]);

  useEffect(() => {
    dispatchGetListPackage();
  }, []);

	const onSelectCallback = selectList => {
		setSelectList(selectList);
		addPackageModal.hide();
	}

  return {
    dispatchGetListPackage,
    listPacckage,
		addPackageModal,
		onSelectCallback,
		selectList
  };
};

export default useSelectPackage;
