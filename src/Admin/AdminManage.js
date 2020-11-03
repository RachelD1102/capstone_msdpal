import React, { useState } from "react";
import "react-table-6/react-table.css";
import Navbar from "../LandingPage/navBar";
import NewsTable from "./NewsTable";
import "../Users/SigninForm.css";
import { Redirect } from "react-router-dom";

export default function AdminManageNews() {
  const [isBack, setBack] = useState(false);

  const onBack = () => {
    setBack(true);
  };

  if (isBack) return <Redirect to="admin-mainpage" />;

  return (
    <>
      <Navbar />
      <NewsTable />
      <div className="table-back-container">
        <button type="button" className="table-back-btn" onClick={onBack}>
          Back to Mainpage
        </button>
      </div>
    </>
  );
}
