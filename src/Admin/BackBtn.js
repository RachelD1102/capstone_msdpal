import React, { useState } from "react";
import "../Users/SigninForm.css";
import { Redirect } from "react-router-dom";

export default function BackBtn() {
  const [isBack, setBack] = useState(false);

  const onBack = () => {
    setBack(true);
  };

  if (isBack) return <Redirect to="admin-mainpage" />;
  return (
    <button type="button" className="form-back-btn" onClick={onBack}>
      Back to Mainpage
    </button>
  );
}
