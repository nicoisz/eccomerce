import FbButton from "../../components/buttons/facebook-btn/facebook-btn.component";
import GoogleBtn from "../../components/buttons/google-btn/google-btn.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {
  return (
    <div>
      <h1>sign in with</h1>
      <SignUpForm></SignUpForm>
      <GoogleBtn></GoogleBtn>
      <FbButton></FbButton>
    </div>
  );
};

export default SignIn;
