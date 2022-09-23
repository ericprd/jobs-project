import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export default function Auth(props) {
  if (Cookies.get("token") === undefined) {
    return <Navigate to={"/login"} />;
  } else if (Cookies.get("token") !== undefined) {
    return props.children;
  }
}
