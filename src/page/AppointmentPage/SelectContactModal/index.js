import { Button, Input, Modal, Form, Checkbox, message, Select } from "antd";
import "./style.css";
import { useCallback, useContext, useState } from "react";
import { MainContext } from "@/service/StoreContext";
import ico_add from "@/assets/images/ButtonAdd.png";
import Image from "next/image";
import { SearchOutlined } from "@ant-design/icons";
import { useAppointment } from "../hook";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";

const { Search } = Input;
const SelectContactModal = ({ showing, onClose }) => {
  const { listContact } = useAppointment();
  const { dispatchSubmitClient } =
    useContext(MainContext);
  const [selectItem, setSelectItem] = useState({});

  const onChangeSelectRequest = (checked, item) => {
    setSelectItem(checked ? item : {});
  };


  const onSelectClient = useCallback(() => {
    if (isEmpty(selectItem)) {
      //showToast("Please select client");
    } else {
      dispatchSubmitClient(selectItem);
      onClose();
    }
  }, [selectItem]);

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
        maxHeight: "700px",
        minHeigth: "300px",
      }}
    >
      <h2 className="title-h1">Contact</h2>
      <div>
        <Input
          placeholder="Search"
          className="search-left"
          suffix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
        />
        <Image
          src={ico_add}
          width={40}
          alt=""
          //onClick={contactModal.show}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="table-style">
        <table>
          <thead>
            <tr>
              <th className="text-left w150">Name</th>
              <th className="text-left w200">Email</th>
              <th className="text-left w200">Phone</th>
              <th className="text-left w150">Action</th>
            </tr>
          </thead>
          <tbody>
            {map(listContact, (item) => (
              <tr key={item?.id}>
                <td className="text-left w200">{item?.name}</td>
                <td className="text-left w200">{item?.email}</td>
                <td className="text-left w200">{item?.phone}</td>
                <td className="text-left w150">
                  <Checkbox
                    checked={item?.id === selectItem?.id}
                    onChange={(e) =>
                      onChangeSelectRequest(e.target.checked, item)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="action-btn">
          <Button type="primary" color="blue" ghost onClick={onClose}>
            Cancel
          </Button>
          <Button type="primary" onClick={onSelectClient}>
            Next
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SelectContactModal;
