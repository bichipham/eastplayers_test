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
import Step2Cpn from "./Step2Cpn";
// nhanh 1 doi 4
const AppointmentPage = () => {
  const { contactModal, getContactModal, stepAppointment } = useAppointment();

  return (
    <div className="main-page">
      <div className="div__header" />
      <div style={{ display: "flex" }}>
        {stepAppointment == 1 ? <Step1Cpn /> : <Step2Cpn />}
        <div className="status">
          <Steps
            direction="vertical"
            current={stepAppointment}
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
    // update main 1
  );
};

export default AppointmentPage;
