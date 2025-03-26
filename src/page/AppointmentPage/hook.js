import { useCustomModal } from "@/util/hooks";

export const useAppointment = () => {
  const contactModal = useCustomModal();
  return {
    contactModal,
  };
};
