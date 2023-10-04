import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.component.scss";
import FbButton from "../../components/buttons/facebook-btn/facebook-btn.component";
import GoogleBtn from "../../components/buttons/google-btn/google-btn.component";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <div className="row">
        <SignInForm></SignInForm>
        <SignUpForm></SignUpForm>
      </div>

      <div>
        <hr />
        <div className="row">
          <GoogleBtn></GoogleBtn>
          <FbButton></FbButton>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
