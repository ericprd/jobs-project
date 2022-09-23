import { Menu } from "@mui/icons-material";
import { useContext } from "react";
import { GlobalContext } from "../../context/global-context";
import { hamburger_style } from "../../style/navbar-style";

export default function Hamburger() {
  const { setIsHide } = useContext(GlobalContext);

  const handleClick = () => {
    setIsHide(false);
  };

  return (
    <div className={hamburger_style} onClick={handleClick}>
      <Menu fontSize='large' />
    </div>
  );
}
