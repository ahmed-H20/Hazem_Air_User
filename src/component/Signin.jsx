/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signin = () => {
  const { register, handleSubmit } = useForm();
  const { changePassword, logIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const email = "hazem@gmail.com";

  const onSubmit = (data) => {
    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        alert("Login Success");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const errorMassege = error.message;
        setErrorMessage("Provide a correct email and password!");
      });
  };

  // const change_Password = () => {
  //   changePassword(email, "ahmed").then(() => {
  //     alert("sucsses")
  //     console.log("done")
  //   }).catch((error) => {
  //     const errorMassege = error.message;
  //     setErrorMessage("Provide a correct email and password!");

  //   });
  // }
  return (
    <div>
      <div className="hero  min-h-screen ">
        <div className="hero-content w-full">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="m-8">
              <h3 className="font-bold text-lg"> Hello MR.Hazem !</h3>
              <p className="">Please enter the password</p>
            </div>
            <form
              className="card-body -mt-12"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("password")}
                />
              </div>
              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register("password")}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
