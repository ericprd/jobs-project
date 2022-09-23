import Cookies from "js-cookie";

export default function User() {
  const userImg = Cookies.get("image_url");

  return (
    <div>
      <img src={userImg} alt='user' className="w-10" />
    </div>
  );
}
