import Cookies from "js-cookie";

export default function Profile() {
  return (
    <div className='w-3/5 mx-auto flex flex-col justify-center items-center mt-20'>
      <img src={Cookies.get("image_url")} alt='user-profile' className='w-40' />
      <table className='w-40 mx-auto'>
        <tbody>
          <tr>
            <td className='p-4'>Name:</td>
            <td className='p-4'>{Cookies.get("name")}</td>
          </tr>
          <tr>
            <td className='p-4'>Email:</td>
            <td className='p-4'>{Cookies.get("email")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
