import { Button, Input, Modal, Form, message } from "antd";
import "./style.css";
import { useContext } from "react";
import { MainContext } from "@/service/StoreContext";
import { makeid } from "@/util/helpers";

const AddcontactModal = ({ showing, onClose }) => {
  const [form] = Form.useForm();
  const { dispatchAddContact, dispatchGetListContact, dispatchSubmitClient } =
    useContext(MainContext);
  const [messageApi, contextHolder] = message.useMessage();
  const onFinishInput = (payload) => {
    const { email, phone, name, note, add_phone } = payload || {};
    if (!email && !phone && !add_phone) {
      form.setFields([
        {
          name: "email", // required
          errors: ["Please enter at least one field: email or phone number."],
        },
        {
          name: "phone", // required
          errors: ["Please enter at least one field: email or phone number."],
        },
        {
          name: "add_phone", // required
          errors: ["Please enter at least one field: email or phone number."],
        },
      ]);
      return;
    }
    // console.log('!!!!!! add contact ' ,payload);
    const objWithID = { id: makeid(), ...payload };
    dispatchAddContact({
      data: objWithID,
      callback: (res) => {
        message.info("Action Success");
        dispatchSubmitClient(objWithID);
        dispatchGetListContact();
      },
      handleError: (err) => {
        message.error("Action Fail");
      },
    });
    onClose();
    //commit test1
    //commit test2
  };

  return (
    <Modal
      centered
      className="popup-main"
      open={showing}
      onCancel={onClose}
      width={400}
      closable={true}
      footer={null}
      styles={{
        maxHeight: "700px",
      }}
    >
      <h2 className="title-h1">Add Contact</h2>
      <Form onFinish={onFinishInput} form={form}>
        <p style={{ marginBottom: "10px" }}>
          Please enter at least one field: email or phone number.
        </p>
        <p>Name</p>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <p>Email</p>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "Invalid email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <p>Phone</p>
        <Form.Item name="phone" rules={[]}>
          <Input />
        </Form.Item>
        <p>Additional Phone number</p>
        <Form.Item name="add_phone" rules={[]}>
          <Input />
        </Form.Item>
        <p>Note</p>
        <Form.Item name="note">
          <Input />
        </Form.Item>
        <div className="action-btn">
          <Button type="primary" color="blue" ghost onClick={onClose}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
      {contextHolder}
    </Modal>
  );
};

export default AddcontactModal;
