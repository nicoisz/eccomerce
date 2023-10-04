import {
  auth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormButton from "../buttons/form-button/form-btn.component";
import Inputform from "../input-form/input-form.component";
import "./sign-in-form.styles.scss";
import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    console.log("reset form fields");
    setFormFields(defaultFormFields);
  };
  console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response, email, password);
      resetFormFields();
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Inputform
          type={"text"}
          label={"username"}
          placeholder={"enter user name"}
          required={true}
          name={"email"}
          value={email}
          onChange={handleChange}
        ></Inputform>
        <Inputform
          type={"password"}
          label={"password"}
          placeholder={"enter password"}
          required={true}
          name={"password"}
          value={password}
          onChange={handleChange}
        ></Inputform>
        <FormButton textButton={"Sign In"} buttonType="inverted"></FormButton>
      </form>
    </div>
  );
};
export default SignInForm;
