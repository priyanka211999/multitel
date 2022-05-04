import { AUTH_TOKEN, getCookie } from "../utils/cookie"
import React, { useEffect, useState } from "react";
import { getUserDetailsByToken } from "../services/authentication"
import { showAlert } from "../utils/showAlert"
import { ROLE } from "../constants/authconstant"
import { useNavigate } from "react-router-dom";


export const RedirectComponent = () => {
  const [loading, setLoading] = useState({});

  const navigate = useNavigate();

  const getDataByToken = async () => {
    try {
      setLoading(true);
      const  result  = await getUserDetailsByToken();
      redirectUser(result);
    } catch (error) {
      // showAlert("You are not authorized! Please try again.", "error");
      alert("You are not authorized! Please try again.");
      navigate("/home");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataByToken();
  }, []);

  const redirectUser = (result) => {
    console.log("result",result.data.data.role)
    if (result.data.data.role == ROLE.ADMIN) {
        navigate("/admin");
    }
    else if (result.data.data.role == ROLE.SUPERADMIN)
    {
            navigate("/admin");
        }
        else if (result.data.data.role == ROLE.USER)
    {
            navigate("/home");
        }

        else if (result.data.data.role == ROLE.VENDOR)
        {
                navigate("/home");
            }

  else{
        navigate("/#");
    }

  };

  if (loading) return <div>Loading...</div>;

  return null;
};
