import { contactStyle } from "../../style/contacts-style";
import SocialMedia from "./social-media";
import MailPhone from "./mail-phone";

export default function Contact() {
  return (
    <div className={contactStyle}>
      <SocialMedia />
      <MailPhone />
    </div>
  );
}
