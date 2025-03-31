import { Button, Input, Modal, Form, Checkbox, message, Select } from "antd";
import "./style.css";
import Image from "next/image";
import { SearchOutlined } from "@ant-design/icons";
import { useAppointment } from "../hook";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import { useContext } from "react";
import { MainContext } from "@/service/StoreContext";
import iconPackage from "@/assets/images/icoPackage.png";
import iconOption from "@/assets/images/iconOption.png";

const { Search } = Input;
const SelectPackageModal = ({ showing, onClose }) => {
  const { listPackage } = useContext(MainContext);

  return (
    <Modal
      centered
      className="popup-main"
      open={showing}
      onCancel={onClose}
      width={800}
      closable={true}
      footer={null}
      styles={{
        maxHeight: "1000px",
        minHeigth: "300px",
      }}
    >
      <h2 className="title-h1">Package</h2>
      <div>
        <Input
          placeholder="Search"
          className="search-left"
          suffix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
        />
      </div>
      <div className="table-style">
        <table>
          <thead>
            <tr>
              <th className="text-left w350">Package Name</th>
              <th className="text-left w350">Service</th>
              <th className="text-left w250">Price</th>
              <th className="text-left w250">Estimate time</th>
              <th className="text-left w150">Action</th>
            </tr>
          </thead>
          <tbody>
            {map(listPackage, (item) => (
              <tr key={item?.id}>
                <td className="text-left w350">
                  <div style={{display: 'flex', alignItems: 'center'}} >
                    <Image
                      src={iconPackage}
                      alt="package"
                      width={50}
                      height={50}
                      style={{ marginRight: "5px" }}
                    />
                    {item?.name}
                  </div>
                </td>
                <td className="text-left w350">{item?.service}</td>
                <td className="text-left w250">{item?.price}</td>
                <td className="text-left w250">{item?.time}</td>
                <td className="text-left w150">
                  {/* <Checkbox
                    checked={item?.id === selectItem?.id}
                    onChange={(e) =>
                      onChangeSelectRequest(e.target.checked, item)
                    }
                  /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="action-btn">
          <Button type="primary" color="blue" ghost onClick={onClose}>
            Cancel
          </Button>
          <Button type="primary">Next</Button>
        </div>
      </div>
    </Modal>
  );
};

export default SelectPackageModal;
