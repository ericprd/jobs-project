import { Email, Phone } from "@mui/icons-material";
import { mailPhoneStyle } from "../../style/contacts-style";

export default function MailPhone() {
  return (
    <div className={mailPhoneStyle}>
      <span className='text-white'>
        <Email style={{ color: "white" }} /> jobs-project@project.com
      </span>
      <span className='text-white'>
        <Phone style={{ color: "white" }} /> +628123456789
      </span>
    </div>
  );
}
