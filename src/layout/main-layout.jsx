import { useContext } from "react";
import { GlobalContext } from "../context/global-context";

export default function MainLayout(props) {
  const { isHide } = useContext(GlobalContext);
  return (
    <main
      className={`h-screen relative overflow-x-hidden ${
        isHide ? "overflow-y-scroll" : "overflow-y-hidden"
      }`}>
      {props.children}
    </main>
  );
}
