import { footerStyle } from "../../style/footer-style";
import Address from "./address";
import Contact from "./contacts";

export default function Footer() {
  return (
    <footer className={footerStyle}>
      <Address />
      <Contact />
    </footer>
  );
}
