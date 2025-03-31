"use client";
import { Select, Button } from "antd";
import "../style.css";
import icoNodata from "@/assets/images/icoNoData.png";
import Image from "next/image";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import { useAppointment } from "../hook";

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
      <h2 className="h2__white">Service</h2>
      <div className="main-form">
        <span style={{ display: "inline-block", marginBottom: "5px" }}>
          Add Packages
          <p style={{ color: "red", display: "inline-block" }}> &nbsp; *</p>
        </span>
        <div className="div__left_outside">
          <div
            className="div__left"
            style={{ width: "100%", float: "none" }}
            onClick={getContactModal.show}
          />
          <span className="div__left_inner">Select</span>
          <i className="arrow down" style={{ left: `calc(100% - 18px)` }}></i>
        </div>
        <div>
          <div className="div__nodata">
            <Image src={icoNodata} width={100} height={100} alt="no data" />
						<p>The selected packages will appear here</p>
          </div>
        </div>
        <div className="action-btn">
          <Button type="primary" color="blue" ghost>
            Cancel
          </Button>
          <Button type="primary">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Step2Cpn;
