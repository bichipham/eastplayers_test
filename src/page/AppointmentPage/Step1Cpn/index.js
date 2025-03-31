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
import "../style.css";
import ico_add from "@/assets/images/ButtonAdd.png";
import Image from "next/image";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import { useAppointment } from "../hook";
import SelectContactModal from "../SelectContactModal";
import AddcontactModal from "../AddContactModal";

const Step1Cpn = () => {
  const {
    contactModal,
    getContactModal,
    onChangeMode,
    vehicleInfo,
    isSelectMode,
    currentAppointment,
    onResetClient,
  } = useAppointment();

  const {
    year: listYear = [],
    make: listMake = [],
    type: listType = [],
    modal: listModal = [],
  } = vehicleInfo || {};

	const renderContactInfo = () => {
		const contactMap = new Map(Object.entries(currentAppointment?.client));
		console.log('!!!!!1 ',contactMap);
		return (
			<>
			{map(contactMap, item => (
				  <div className="div__inline_info">
					<span>{item.value}</span>
				</div>)
			)}
			</>
		)
	}

  return (
    <div style={{position: 'relative'}}>
      <div className="main-form">
        <p>Contact</p>
        {isEmpty(currentAppointment?.client) ? (
          <div className="div__left_outside">
            <div className="div__left" onClick={getContactModal.show} />
						<span className="div__left_inner">
						Select
						</span>
						<i class="arrow down"></i>
            <Image
              src={ico_add}
              width={40}
              alt=""
              onClick={contactModal.show}
              style={{ cursor: "pointer" }}
            />
          </div>
        ) : (
          <div className="div_inline">
            <span className="title">Client</span>
            {/* {map(Object.entries(currentAppointment?.client), (item) =>
              item.key !== 'id' ? (
                <div className="div__inline_info">
                  <span>{item.value}</span>
                </div>
              ) : null
            )} */}
						{renderContactInfo()}
            <span className="close" onClick={onResetClient}>
              x
            </span>
          </div>
        )}
        <p style={{ margin: "15px 0 15px 0" }}>Vehicle Detail</p>
        <div className="div__detail">
          <div className="col2">
            <div className="col2-item">
              <p style={{ marginTop: "10px" }}>Year</p>
              <Select
                placeholder="Select"
                className="select__item"
                dropdownStyle={{ backgroundColor: "black" }}
                options={map(listYear, (item, index) => {
                  return { key: index, value: item };
                })}
              />
            </div>
            <div className="col2-item">
              <p style={{ marginTop: "10px" }}>Make</p>
              <Select
                placeholder="Select"
                className="select__item"
                dropdownStyle={{ backgroundColor: "black" }}
                options={map(listMake, (item, index) => {
                  return { key: index, value: item };
                })}
              />
            </div>
          </div>
          <p style={{ marginTop: "10px" }}>Modal</p>
          <Select
            placeholder="Select"
            className="select__item"
            dropdownStyle={{ backgroundColor: "black" }}
            options={map(listModal, (item, index) => {
              return { key: index, value: item };
            })}
          />
          <p style={{ marginTop: "10px" }}>Vehicle Type</p>
          <Select
            placeholder="Select"
            className="select__item"
            dropdownStyle={{ backgroundColor: "black" }}
            options={map(listType, (item, index) => {
              return { key: index, value: item };
            })}
          />
        </div>
        {isSelectMode ? (
          <div className="div__link" onClick={onChangeMode}>
            {`Can't find a vehicle? Enter it manually`}.
          </div>
        ) : (
          <div className="div__link" onClick={onChangeMode}>
            {`I prefer to pick from the available Vehicle options.`}.
          </div>
        )}
        <div className="submit">
          <Button type="primary">Next</Button>
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
  );
};

export default Step1Cpn;
