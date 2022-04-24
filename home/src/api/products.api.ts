const API_SERVER = "http://localhost:8080";

export const getProducts = (signal: AbortSignal) =>
  fetch(`${API_SERVER}/products`, {
    signal,
  }).then((res) => res.json());

export const getProductById = (id: number) =>
  fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());
