const API_SERVER = "http://localhost:8080";
import { jwt } from "../cart";

export const login = (username: string, password: string) =>
  fetch(`${API_SERVER}/auth/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then(({ access_token }) => {
      jwt.next(access_token);

      return access_token;
    });
