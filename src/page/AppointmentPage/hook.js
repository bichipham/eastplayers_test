import { MainContext } from "@/service/StoreContext";
import { useCustomModal } from "@/util/hooks";
import { useContext, useState } from "react";

export const useAppointment = () => {
  const contactModal = useCustomModal();
  const getContactModal = useCustomModal();
  const [isSelectMode, setIsSelectMode] = useState(true);
  const { listContact = [], vehicleInfo = [], currentAppointment, stepAppointment, dispatchSubmitClient } = useContext(MainContext);

  const onChangeMode = () => {
    setIsSelectMode(!isSelectMode);
  };

  const onResetClient = () => {
    dispatchSubmitClient({});
  };

  return {
    listContact,
    vehicleInfo,
    contactModal,
    getContactModal,
    isSelectMode,
    onChangeMode,
    currentAppointment,
    stepAppointment,
    onResetClient,
  };
};
