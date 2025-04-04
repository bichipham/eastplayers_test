import { Button, Input, Modal, Checkbox, Table, Collapse } from "antd";
import "../tableStyle.css";
import Image from "next/image";
import { SearchOutlined } from "@ant-design/icons";
import { useAppointment } from "../hook";
import map from "lodash/map";
import filter from "lodash/filter";
import find from "lodash/find";
import isEmpty from "lodash/isEmpty";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "@/service/StoreContext";
import iconPackage from "@/assets/images/icoPackage.png";
import iconOption from "@/assets/images/iconOption.png";
import iconUp from "@/assets/images/icoup.png";
import iconDown from "@/assets/images/icodown.png";

const { Search } = Input;
const SelectPackageModal = ({ showing, onClose, onSubmit }) => {
  const { listPackage } = useContext(MainContext);
  const [listSelectItem, setListSelectItem] = useState([]);

  const onSelectItem = (checked, record = []) => {
    let list = listSelectItem;
    if (checked) {
      list = [...listSelectItem, ...record];
    } else {
      const listId = map(record, (r) => r?.id);
      list = filter(listSelectItem, (item) => !listId?.includes(item?.id));
    }
    setListSelectItem(list);
  };

  const data = listPackage;

  return (
    <Modal
      centered
      className="popup-main"
      open={showing}
      onCancel={onClose}
      width={1000}
      closable={true}
      footer={null}
      styles={{
        minHeigth: "300px",
      }}
    >
      <h2 className="title-h1">Package</h2>

      <Input
        style={{ width: "100%", marginBottom: "15px" }}
        placeholder="Search"
        suffix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
      />
      <div className="table-body">
        <div className="list-row-item-header">
          <div className="text-left" style={{ width: "250px" }}>
            Package Name
          </div>
          <div className="text-left" style={{ width: "250px" }}>
            Service
          </div>
          <div className="text-left" style={{ width: "150px" }}>
            Price
          </div>
          <div className="text-left" style={{ width: "100px" }}>
            Estimate Time
          </div>
          <div className="text-left">Action</div>
        </div>
        <div>
          {map(listPackage, (item) => (
            <RowBlock
              item={item}
              key={item?.id}
              listSelectItem={listSelectItem}
              onSelectItem={onSelectItem}
            />
          ))}
        </div>
      </div>
      <div className="action-btn">
        <Button type="primary" color="blue" ghost onClick={onClose}>
          Cancel
        </Button>
        <Button type="primary" onClick={() => onSubmit(listSelectItem)}>
          Next
        </Button>
      </div>
    </Modal>
  );
};

export default SelectPackageModal;

const RowBlock = ({ item, onSelectItem, listSelectItem }) => {
  const [expand, setExpand] = useState(true);
  const [selectAll, setSelectAll] = useState(false);
  const haveChildren = !isEmpty(item?.children);
  const isSelected = (id) => find(listSelectItem, (record) => record?.id == id);
  useEffect(() => {
    if (selectAll) {
      onSelectItem(true, item?.children);
    } else {
      onSelectItem(false, item?.children);
    }
  }, [selectAll]);
  return (
    <>
      <div
        className={`list-row-item ${
          haveChildren && expand ? "expandable" : ""
        } ${isSelected(item?.id) ? "selected" : ""}`}
      >
        <RowItem item={item} />
        <div style={{ textAlign: "end" }}>
          {haveChildren ? (
            <Image
              src={!expand ? iconDown : iconUp}
              width={30}
              height={30}
              alt=""
              onClick={() => setExpand(!expand)}
              style={{ float: "right", cursor: "pointer" }}
            />
          ) : (
            <Checkbox
              onChange={(e) => onSelectItem(e.target.checked, [item])}
            />
          )}
        </div>
      </div>
      {haveChildren && expand ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "10px",
            }}
          >
            <a onClick={() => setSelectAll(!selectAll)}>{`${
              selectAll ? "Unselect All" : "Select All"
            }`}</a>
          </div>
          {map(item?.children, (children) => (
            <div
              className={`list-row-item
						 ${isSelected(children?.id) ? "selected" : ""}`}
              key={children?.id}
            >
              <RowItem item={children} />
              <div style={{ textAlign: "end" }}>
                <Checkbox
                  onChange={(e) => onSelectItem(e.target.checked, [children])}
                  checked={isSelected(children?.id)}
                />
              </div>
            </div>
          ))}
        </>
      ) : null}
    </>
  );
};

const RowItem = ({ item }) => {
  return (
    <>
      <div
        style={{ display: "flex", alignItems: "center", width: "250px" }}
        className="text-left"
      >
        <Image
          src={item?.isOption ? iconOption : iconPackage}
          alt="package"
          width={50}
          height={50}
          style={{ marginRight: "10px" }}
        />
        {item?.name}
      </div>
      <div className="text-left" style={{ width: "250px" }}>
        <p>{item?.service} &nbsp;</p>
      </div>
      <div className="text-left" style={{ width: "150px" }}>
        <p>{item?.price} &nbsp;</p>
      </div>
      <div className="text-left" style={{ width: "100px" }}>
        <p>{item?.time} &nbsp;</p>
      </div>
    </>
  );
};
