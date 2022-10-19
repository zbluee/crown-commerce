import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SingInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
    console.log(this.unsubscribeFromAuth);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SingInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
