import { Facebook, GitHub, Twitter } from "@mui/icons-material";
import { socialStyle } from "../../style/contacts-style";

export default function SocialMedia() {
  return (
    <div className={socialStyle}>
      <span>
        <a href='https://github.com' className='text-white'>
          <GitHub style={{ color: "white", height: 24 }} /> GitHub
        </a>
      </span>
      <span>
        <a href='https://facebook.com' className='text-white'>
          <Facebook style={{ color: "white" }} /> Facebook
        </a>
      </span>
      <span>
        <a href='https://twitter.com' className='text-white'>
          <Twitter style={{ color: "white" }} /> Twitter
        </a>
      </span>
    </div>
  );
}
