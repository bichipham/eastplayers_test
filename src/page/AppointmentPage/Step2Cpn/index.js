"use client";
import { Button, Table } from "antd";
import "../style.css";
import icoNodata from "@/assets/images/icoNoData.png";
import Image from "next/image";
import isEmpty from "lodash/isEmpty";
import SelectPackageModal from "../SelectPackageModal";
import useSelectPackage from "./hook";
import TableData from "./TableData";
import { useContext } from "react";
import { MainContext } from "@/service/StoreContext";

const Step2Cpn = () => {
  const { addPackageModal, onSelectCallback, selectList, onRemoveItem } =
    useSelectPackage();
  const { dispatchSetStepAppointment } = useContext(MainContext);
// nhanh 1 doi 2
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
            onClick={addPackageModal.show}
          />
          <span className="div__left_inner">Select</span>
          <i className="arrow down" style={{ left: `calc(100% - 18px)` }}></i>
        </div>
        <div>
          {isEmpty(selectList) ? (
            <div className="div__nodata">
              <Image src={icoNodata} width={100} height={100} alt="no data" />
              <p>The selected packages will appear here</p>
            </div>
          ) : (
            <div>
              <TableData data={selectList} onRemoveItem={onRemoveItem} />
            </div>
          )}
        </div>
        <div className="action-btn">
          <Button type="primary" color="blue" ghost onClick={() => dispatchSetStepAppointment(1)} >
            Back
          </Button>
          <Button type="primary">Next</Button>
        </div>
      </div>
      <SelectPackageModal
        showing={addPackageModal.isShowing}
        onClose={addPackageModal.hide}
        onSubmit={onSelectCallback}
      />
    </div>
  );
};

export default Step2Cpn;
