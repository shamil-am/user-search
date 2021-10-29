import { Form, Input, Button, Checkbox } from "antd";
import { useContext, useState } from "react";
import { userContext } from "./../context/UserContextProvider";
import { Alert } from "antd";

const Welcome = () => {
  //state
  const { logged, setLogged } = useContext(userContext);
  const [alert, setAlert] = useState({ type: false, message: "" });
  //functions
  const onFinish = (values) => {
    let { username, password } = values;
    if (username.toUpperCase() !== process.env.REACT_APP_USERNAME) {
      setAlert({ type: true, message: "wrong username" });
      setTimeout(() => {
        setAlert({ type: false, message: "" });
      }, 2000);
      return;
    }
    if (password.toUpperCase() !== process.env.REACT_APP_PASSWORD) {
      setAlert({ type: true, message: "wrong password" });
      setTimeout(() => {
        setAlert({ type: false, message: "" });
      }, 2000);
      return;
    }
    setLogged(!logged);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //components
  return (
    <>
      {alert.type && <Alert message={alert.message} type="error" closable />}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Welcome;
