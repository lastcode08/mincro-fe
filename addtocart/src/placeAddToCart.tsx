import { MountableElement, render } from "solid-js/web";
import AddToCart from "./components/AddToCart";

export default function placeAddToCart(element: MountableElement, id: number) {
  render(() => <AddToCart id={id} />, element);
}
