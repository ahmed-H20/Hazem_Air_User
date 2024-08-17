import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const {SignOUt} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogOut = () => {
    SignOUt().then(() => {
      
    }).catch((error) => {
      console.log(error)
    });
    alert ("logout success!")
    navigate("/signup", {replace: true})
  }
  return (
    <div>
      <div className="navbar bg-base-100 w-full ">
        <div className="flex-1">
        <a href = '/' className="btn btn-ghost text-xl "><img className="w-12 rounded-full" src="https://img.icons8.com/?size=100&id=114617&format=png&color=000000" alt="" /> Hazem<span className="text-green">.co</span></a>
        </div>
        <div className="flex-none gap-2">          
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/* <li>
                <button onClick={()=>document.getElementById('my_modal_5').showModal()}>change password</button>
              </li>
              <Modal/> */}
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
