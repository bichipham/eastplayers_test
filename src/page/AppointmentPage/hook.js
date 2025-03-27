import { useCustomModal } from "@/util/hooks";
import { useEffect, useState } from "react";
import { getListContact } from "src/actions/appointment";

export const useAppointment = () => {
  const contactModal = useCustomModal();
  const [listContact, setListcontact] = useState([]);
  useEffect(() => {
  
    getListContact().then(data => {
      console.log('!!!!!!1 list contact ', data);
    });

  } ,[])
  return {
    contactModal,
  };
};
