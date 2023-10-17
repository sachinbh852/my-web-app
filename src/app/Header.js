import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Menu} from "./Menu";
import Searchbox from "./searchbox/page";

export const Header = () => {
  return (
    <div className="container-fluid border  bg-primary ">
      <div className="row">
        <div className=" col-4 header ">
         <h1> React App</h1>
        </div>
        <div className=" col-3 ">
          <Searchbox/>
          </div>
        <div className="col-5">
          <Menu />
        </div>
      </div>
    </div>
  );
};
