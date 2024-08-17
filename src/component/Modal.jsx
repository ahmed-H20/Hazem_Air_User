/* eslint-disable no-unused-vars */
// import React, { useContext, useState } from 'react'
// import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
// import { useForm } from "react-hook-form"
// import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";

// import { AuthContext } from '../contexts/AuthProvider'
const Modal = () => {
  const { register, handleSubmit } = useForm();
  const { changePassword } = useContext(AuthContext);
  const onSubmit = (data) => {
    const email = "hazem@company.com";
    changePassword(email, data.password)
      .then(() => {
        alert("sucsses");
        console.log("done");
      })
      .catch((error) => {
        const errorMassege = error;
        console.log(errorMassege);
      });
  };

  return (
    <dialog id="my_modal_5" className="modal modal-middle  sm:modal-middle">
      <div className="modal-box">
        <div className="modal-action flex flex-col justify-center mt-0 ">
          <form
            className="card-body"
            id="my_form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="font-bold text-lg">Change Password!</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">New Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password")}
              />
            </div>
            {
              //  errorMessage ? <p className='text-red text-sm italic'>{errorMessage}</p> : ""
            }
            <div className="form-control mt-6">
              <button className="btn bg-green text-white">Login</button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
