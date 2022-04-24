import { useEffect, useState } from "react";
import { jwt } from "../cart";

export const useLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!jwt.value);

  useEffect(() => {
    setIsLoggedIn(!!jwt.value);

    return jwt.subscribe((value) => {
      setIsLoggedIn(!!value);
    });
  }, []);

  return isLoggedIn;
};
