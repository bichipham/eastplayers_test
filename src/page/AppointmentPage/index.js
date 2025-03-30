"use client";
import {
  Checkbox,
  Tag,
  Input,
  Form,
  InputNumber,
  Row,
  Select,
  Steps,
  Button,
} from "antd";
import "./style.css";
import ico_add from "@/assets/images/ButtonAdd.png";
import Image from "next/image";
import { useAppointment } from "./hook";
import AddcontactModal from "./AddContactModal";
import map from "lodash/map";
import SelectContactModal from "./SelectContactModal";

const AppointmentPage = () => {
  const { contactModal, getContactModal, listContact, vehicleInfo } =
    useAppointment();
  console.log("!!!!!! render listContact ", vehicleInfo);
  const {
    year: listYear = [],
    make: listMake = [],
    type: listType = [],
    modal: listModal = [],
  } = vehicleInfo || {};

  return (
    <div className="main-page">
      {" "}
      <div className="main-form">
        <h2 className="mh_ttl">Client information</h2>
        <p>Contact</p>
        <div>
          {/* <Select className="f-lft" onClick={getContactModal.show}></Select> */}
          <div className="div__left" onClick={getContactModal.show} />
          <Image
            src={ico_add}
            width={40}
            alt=""
            onClick={contactModal.show}
            style={{ cursor: "pointer" }}
          />
        </div>

        <h3 className="sh_ttl">Vericle Detail</h3>
        <div className="detail">
          <div className="col2">
            <div className="col2-item">
              <p>Year</p>
              <Select
                placeholder="Select"
                style={{ width: 300, backgroundColor: "#2F323E" }}
                options={map(listYear, (item, index) => {
                  return { key: index, value: item };
                })}
              />
            </div>
            <div className="col2-item">
              <p>Make</p>
              <Form.Item name="make">
                <Select
                  placeholder="Select"
                  options={map(listYear, (item, index) => {
                    return { key: index, value: item };
                  })}
                />
              </Form.Item>
            </div>
          </div>
          <p>Modal</p>

          <Select
            placeholder="Select"
            options={map(listYear, (item, index) => {
              return { key: index, value: item };
            })}
          />

          <p>Vehicle Type</p>

          <Select
            placeholder="Select"
            options={map(listYear, (item, index) => {
              return { key: index, value: item };
            })}
          />
        </div>

        <div className="link">{`Can't find a vehicle? Enter it manually`}.</div>
        <div className="submit">
          <Button type="primary">Next</Button>
        </div>
      </div>
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
