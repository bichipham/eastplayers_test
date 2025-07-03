import { Button, Input, Modal, Form, Checkbox, message } from "antd";
import "./style.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { MainContext } from "@/service/StoreContext";
import ico_add from "@/assets/images/ButtonAdd.png";
import Image from "next/image";
import { SearchOutlined } from "@ant-design/icons";
import { useAppointment } from "../hook";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import { removeAccents, searchTextRemoveAccent } from "@/util/helpers";
import debounce from "lodash/debounce";

const { Search } = Input;
const SelectContactModal = ({ showing, onClose }) => {
  const { listContact = [] } = useAppointment();
  const [filerListContact, setFilerListContact] = useState(listContact);
  const [keyword, setKeyword] = useState("");
  const { dispatchSubmitClient } = useContext(MainContext);
  const [selectItem, setSelectItem] = useState({});
  const [messageApi, contextHolder] = message.useMessage();

  const onChangeSelectRequest = (checked, item) => {
    setSelectItem(checked ? item : {});
  };

  const onSelectClient = useCallback(() => {
    if (isEmpty(selectItem)) {
      messageApi.info("Please select client");
    } else {
      dispatchSubmitClient(selectItem);
      onClose();
    }
  }, [selectItem]);

  const debounceSearchLocal = useCallback(
    debounce((nextValue) => setKeyword(nextValue?.target?.value), 500),
    []
  );

  useEffect(() => {
    if (isEmpty(keyword)) {
      setFilerListContact(listContact);
      return;
    }
    const filteredData = listContact?.filter(
      (entry) =>
        searchTextRemoveAccent(entry?.name, keyword) ||
        searchTextRemoveAccent(entry?.phone, keyword) ||
        searchTextRemoveAccent(entry?.email, keyword) ||
        searchTextRemoveAccent(entry?.note, keyword)
    );
    console.log("!!!!1 handle search ", filteredData, keyword);
    setFilerListContact(filteredData);
    //test xx
  }, [keyword, listContact]);

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
          onChange={debounceSearchLocal}
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
            {map(filerListContact, (item) => (
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
      {contextHolder}
    </Modal>
  );
};

export default SelectContactModal;
