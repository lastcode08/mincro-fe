import React, { useEffect, useState } from "react";
import { jwt } from "../cart";

function useLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!jwt.value);

  useEffect(() => {
    setIsLoggedIn(!!jwt.value);

    return () => {
      jwt.subscribe(() => {
        setIsLoggedIn(!!jwt.value);
      });
    };
  }, []);

  return isLoggedIn;
}

export default useLoggedIn;
