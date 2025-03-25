"use client";
import {
  Checkbox,
  Tag,
  Input,
  Form,
  InputNumber,
  Row,
  Select,
	Button
} from "antd";
import "./style.css";
const FormItem = Form.Item;
const AppointmentPage = () => {
  return (
    <div className="main-page">
      {" "}
      <div className="main-form">
        <Form>
          <p>Contact</p>
          <Form.Item name="contavt">
            <Select
              placeholder="Select"
              // onChange={(value) => onSelectCity(value, "city")}
              //   optionFilterProp="children"
              //   filterOption={(input, option) =>
              //     option.children.toLowerCase().includes(input.toLowerCase())
              //   }
            >
              {/* {listCity?.map((item, index) => (
              <Select.Option key={`city_${index}`} value={JSON.stringify(item)}>
                {item?.name}
              </Select.Option>
            ))} */}
            </Select>
          </Form.Item>
          <div className="detail">
            <span>Vericle Detail</span>
            <p>Year</p>
            <Form.Item name="year">
              <Select  placeholder="Select"></Select>
            </Form.Item>
						<p>Make</p>
            <Form.Item name="make">
              <Select  placeholder="Select"></Select>
            </Form.Item>
						<p>Modal</p>
            <Form.Item name="modal">
              <Select  placeholder="Select"></Select>
            </Form.Item>
						<p>Vehicle Type</p>
            <Form.Item name="type">
              <Select  placeholder="Select"></Select>
            </Form.Item>
          </div>
        </Form>
				<div className="link">Can't find a vehicle? Enter it manually.</div>
				<Button className='btn_primary'>Next</Button>
      </div>
      <div className="status">aaaaaaaaaaaa</div>
    </div>
  );
};

export default AppointmentPage;
