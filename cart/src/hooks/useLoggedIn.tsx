import { useEffect, useState } from "react";
import { jwt } from "../cart";

export const useLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!jwt.value);

  useEffect(() => {
    setIsLoggedIn(!!jwt.value);

    jwt.subscribe(() => {
      setIsLoggedIn(!!jwt.value);
    });

    return () => {
      jwt.unsubscribe();
    };
  }, []);

  return isLoggedIn;
};
