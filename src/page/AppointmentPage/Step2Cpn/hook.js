import { MainContext } from "@/service/StoreContext";
import { useCustomModal } from "@/util/hooks";
import { useContext, useEffect } from "react";

const useSelectPackage = () => {
  const { dispatchGetListPackage, listPacckage = [] } = useContext(MainContext);
	const addPackageModal = useCustomModal();

  useEffect(() => {
    dispatchGetListPackage();
  }, []);

  return {
    dispatchGetListPackage,
    listPacckage,
		addPackageModal
  };
};

export default useSelectPackage;
