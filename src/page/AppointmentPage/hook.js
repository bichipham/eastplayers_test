import { MainContext } from "@/service/StoreContext";
import { useCustomModal } from "@/util/hooks";
import { useContext, useEffect, useState } from "react";
import { getListContact } from "src/actions/appointment";

export const useAppointment = () => {
  const contactModal = useCustomModal();
  const { listContact = [], dispatchGetListContact } = useContext(MainContext);
  useEffect(() => {
      dispatchGetListContact();
  } ,[])

  return {
    listContact,
    contactModal
  };
};
