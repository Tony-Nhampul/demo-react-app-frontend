import { useNavigate } from "react-router-dom";
import { namePersistAuth } from "../../config/constants.tsx";
import { sleep } from "@/helpers/index.tsx";
import { useState } from "react";

export function useLogout() {
  const navigate = useNavigate();
  const [logoutLoading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await sleep(1000);

      sessionStorage.removeItem(namePersistAuth);

      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      console.log(error);
    } finally {
      //setLoading(false);
    }
  };

  return { handleLogout, logoutLoading };
}
