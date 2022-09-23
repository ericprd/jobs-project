import Search from "./search";
import { heroStyle, textStyle } from "../../style/hero-style";

export default function Hero() {
  return (
    <div className={heroStyle}>
      <p className={textStyle}>Cari pekerjaan impianmu</p>
      <Search />
    </div>
  );
}
