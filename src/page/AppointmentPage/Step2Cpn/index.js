"use client";
import { Button, Table } from "antd";
import "../style.css";
import icoNodata from "@/assets/images/icoNoData.png";
import Image from "next/image";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import SelectPackageModal from "../SelectPackageModal";
import useSelectPackage from "./hook";
import iconPackage from "@/assets/images/icoPackage.png";
import iconOption from "@/assets/images/iconOption.png";

const Step2Cpn = () => {
  const { addPackageModal, onSelectCallback, selectList } = useSelectPackage();
  console.log("!!!! selectList ", selectList);

  const columns = [
    {
      title: "Package Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={record?.isOption ? iconOption : iconPackage}
            alt="package"
            width={50}
            height={50}
            style={{ marginRight: "5px" }}
          />
          {record?.name}
        </div>
      ),
    },
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      width: "30%",
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "20%",
      key: "price",
    },
    {
      title: "Estimate time",
      dataIndex: "time",
      width: "10%",
      key: "time",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div style={{ display: "flex", flexDirection: "column" }}></div>
      ),
    },
  ];

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
              <Table columns={columns} dataSource={selectList} />
            </div>
          )}
        </div>
        <div className="action-btn">
          <Button type="primary" color="blue" ghost>
            Cancel
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
