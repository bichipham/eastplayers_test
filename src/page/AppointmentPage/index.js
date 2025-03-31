"use client";
import { Steps } from "antd";
import "./style.css";
import ico_add from "@/assets/images/ButtonAdd.png";
import Image from "next/image";
import { useAppointment } from "./hook";
import AddcontactModal from "./AddContactModal";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import SelectContactModal from "./SelectContactModal";
import Step1Cpn from "./Step1Cpn";

const AppointmentPage = () => {
  const {
    contactModal,
    getContactModal,
    onChangeMode,
    vehicleInfo,
    isSelectMode,
    currentAppointment,
    onResetClient,
  } = useAppointment();

  return (
    <div className="main-page">
      <div className="div__header" />
      <h2 className="h2__white">Client information</h2>
      <div style={{ display: "flex" }}>
        <Step1Cpn />
        <div className="status">
          <Steps
            direction="vertical"
            current={1}
            items={[
              {
                title: "Step 1",
                description: "Client information",
              },
              {
                title: "Step 2",
                description: "Services ",
              },
              {
                title: "Step 3",
                description: "Review & Send",
              },
            ]}
          />
        </div>
      </div>
      <AddcontactModal
        showing={contactModal.isShowing}
        onClose={contactModal.hide}
      />
      <SelectContactModal
        showing={getContactModal.isShowing}
        onClose={getContactModal.hide}
      />
    </div>
  );
};

export default AppointmentPage;
