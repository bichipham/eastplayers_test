import { MainContext } from "@/service/StoreContext";
import { useCustomModal } from "@/util/hooks";
import { useContext, useEffect, useState } from "react";

export const useAppointment = () => {
  const contactModal = useCustomModal();
  const getContactModal = useCustomModal();
  const [isSelectMode, setIsSelectMode] = useState(true);
  const { listContact = [], vehicleInfo = [], 
    dispatchGetListContact, dispatchGetVehicleInfo, currentAppointment = {},
    dispatchSubmitClient, stepAppointment, dispatchSetStepAppointment, dispatchSubmitVehicle } = useContext(MainContext);
  useEffect(() => {
      dispatchGetListContact();
      dispatchGetVehicleInfo();
  } ,[])

  const onChangeMode = () => {
    setIsSelectMode(!isSelectMode);
  }

  const onResetClient = () => {
    dispatchSubmitClient({});
  }

  return {
    listContact,
    vehicleInfo,
    contactModal,
    getContactModal,
    isSelectMode,
    onChangeMode,
    currentAppointment,
    dispatchGetVehicleInfo,
    stepAppointment,
    dispatchSetStepAppointment,
    dispatchSubmitVehicle,
    onResetClient
  };
};
