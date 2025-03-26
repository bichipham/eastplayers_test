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
const FormItem = Form.Item;
const AppointmentPage = () => {
  return (
    <div className="main-page">
      {" "}
      <div className="main-form">
        <h2 className="mh_ttl">Client information</h2>
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

          <h3 className="sh_ttl">Vericle Detail</h3>
          <div className="detail">
            <div className="col2">
              <div className="col2-item">
                <p>Year</p>
                <Form.Item name="year">
                  <Select placeholder="Select"></Select>
                </Form.Item>
              </div>
              <div className="col2-item">
                <p>Make</p>
                <Form.Item name="make">
                  <Select placeholder="Select"></Select>
                </Form.Item>
              </div>
            </div>
            <p>Modal</p>
            <Form.Item name="modal">
              <Select placeholder="Select"></Select>
            </Form.Item>
            <p>Vehicle Type</p>
            <Form.Item name="type">
              <Select placeholder="Select"></Select>
            </Form.Item>
          </div>
        </Form>
        <div className="link">Can't find a vehicle? Enter it manually.</div>
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
    </div>
  );
};

export default AppointmentPage;
