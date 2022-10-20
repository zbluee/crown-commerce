import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.style.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "example@gmail.com",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  hadleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sing-in">
        <h2>I have already an account</h2>
        <span>sign with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.hadleChange}
            value={email}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.hadleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">sign in</CustomButton>
            <CustomButton isGoogleSignin={true} onClick={signInWithGoogle}>
              {" "}
              sign in with Google{""}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
