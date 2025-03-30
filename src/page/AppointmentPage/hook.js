import { MainContext } from "@/service/StoreContext";
import { useCustomModal } from "@/util/hooks";
import { useContext, useEffect, useState } from "react";

export const useAppointment = () => {
  const contactModal = useCustomModal();
  const getContactModal = useCustomModal();
  const { listContact = [], vehicleInfo = [], dispatchGetListContact, dispatchGetVehicleInfo } = useContext(MainContext);
  useEffect(() => {
      dispatchGetListContact();
      dispatchGetVehicleInfo();
  } ,[])

  return {
    listContact,
    vehicleInfo,
    contactModal,
    getContactModal,
    dispatchGetVehicleInfo
  };
};
