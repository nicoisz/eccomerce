import FormButton from "../buttons/form-button/form-btn.component";
import Inputform from "../input-form/input-form.component";
import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={() => {}}>
        <Inputform
          type={"text"}
          placeholder={"enter your name "}
          label={"Name"}
          name={"displayName"}
          onChangeHandler={handleChange}
        ></Inputform>
        <Inputform
          type={"mail"}
          placeholder={"enter your email"}
          label={"Email"}
          name={"email"}
          onChangeHandler={handleChange}
        ></Inputform>
        <Inputform
          type={"password"}
          placeholder={"enter your password"}
          label={"Password"}
          name={"password"}
          onChangeHandler={handleChange}
        ></Inputform>
        <Inputform
          type={"password"}
          placeholder={"enter your password again"}
          label={"Confirm Password"}
          name={"confirmPassword"}
          onChangeHandler={handleChange}
        ></Inputform>
        <FormButton></FormButton>
      </form>
    </div>
  );
};

export default SignUpForm;
