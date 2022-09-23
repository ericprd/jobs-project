import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { contentStyle, registerBtn } from "../../style/content-style";
import Features from "./features";
import Intro from "./intro";
import Outro from "./outro";

export default function Content() {
  return (
    <div className={contentStyle}>
      <Intro />
      <Features />
      {!Cookies.get("token") && (
        <>
          <Outro />
          <div>
            <Link to='/register' className={registerBtn}>
              Daftar Sekarang!
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
