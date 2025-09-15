import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  if (error.status === 400) {
    return (
      <div>
        <h2>404 Error Page</h2>
        <p>Back to Home Page</p>
        <button className="btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }
  return <div>ErrorPage</div>;
};
