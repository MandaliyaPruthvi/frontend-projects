import React, { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const VerifyToken = () => {
  const query = useQuery();
  const token = query.get("token");

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const callAPI = async () => {
    try {
      // const response = await fetch(`http://localhost:3000/api/verify-email?token=${token}`, {
      const response = await fetch(
        `https://mywebsite.com/node_application/api/verify-email?token=${token}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      // if (response.ok) {
      alert(`${data.message}`);
      handleGoHome();
      // } else {
      //     setErrors({ ...errors, ...{ apiError: `Error: ${data.message}` } });
      // }
    } catch (error) {
      // setErrors({ ...errors, ...{ apiError: `Error-While Making Call: ${error.message}` } });
      alert("Error while verification");
    }
  };

  useEffect(() => {
    console.log("calling");
    callAPI();
  }, []);

  return <>{/* <p>{token}</p> */}</>;
};

export default VerifyToken;
