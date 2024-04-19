import React from "react";
import "./index.css";

function ListCard() {
  return (
    <div className="HomeContainer">
      <div className="LoginPageContainer">
        <div className="LoginPageCardContainer">
          <div className="ImageContainer">
            <img
              src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1709827194/laura-jones_qcnbk8.jpg"
              alt="Imag"
              className="Image"
            />
            <h3>CHIRANJEEVI EYE & BLOOD CENTER</h3>
          </div>
          <h4 className="Division">Development</h4>
          <h3 className="ADivision">A DIVISION</h3>
          <h3>Login portal</h3>
          <form className="FormContainer">
            <input className="InputText" type="text" placeholder="userName" />
            <input
              className="InputText"
              type="password"
              placeholder="Password"
            />
            <button type="button">Login</button>
          </form>
          <div className="NoAccount">
            <h5 className="NoAccountSign">No Account?</h5>
            <h5>SignUp</h5>
          </div>
          <div className="NoAccountList">
            <h5 className="NoAccountSi">Managed by </h5>
            <h5>Pvt Ltd</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
