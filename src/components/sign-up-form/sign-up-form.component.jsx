import Button from "../buttons/button/button.component";
import Inputform from "../input-form/input-form.component";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormFields = () => {
    // console.log("reset form fields");
    setFormFields(defaultFormFields);
  };
  // console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("email already in use");
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <Inputform
          label={"Name"}
          type={"text"}
          placeholder={"enter your name "}
          name={"displayName"}
          value={displayName}
          onChange={handleChange}
          required={true}
        ></Inputform>
        <Inputform
          label={"Email"}
          type={"mail"}
          placeholder={"enter your email"}
          value={email}
          name={"email"}
          onChange={handleChange}
          required={true}
        ></Inputform>
        <Inputform
          label={"Password"}
          type={"password"}
          placeholder={"enter your password"}
          value={password}
          name={"password"}
          onChange={handleChange}
          required={true}
        ></Inputform>
        <Inputform
          label={"Confirm Password"}
          type={"password"}
          placeholder={"enter your password again"}
          value={confirmPassword}
          name={"confirmPassword"}
          onChange={handleChange}
          required={true}
        ></Inputform>
        <Button buttonType="default" textButton={"Sign Up"}></Button>
      </form>
    </div>
  );
};

export default SignUpForm;
