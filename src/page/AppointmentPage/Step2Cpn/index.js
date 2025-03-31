"use client";
import {
  Select,
  Button,
} from "antd";
import "../style.css";
import ico_add from "@/assets/images/ButtonAdd.png";
import Image from "next/image";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import { useAppointment } from "../hook";
import SelectContactModal from "../SelectContactModal";
import AddcontactModal from "../AddContactModal";

const Step2Cpn = () => {
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
    <div style={{ position: "relative" }}>
      <div className="main-form">
        <p>Contact</p>
      
      
        <div className="submit">
          <Button type="primary">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Step2Cpn;
