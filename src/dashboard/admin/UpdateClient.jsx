/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import { IoMdAirplane } from "react-icons/io";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/UsePublicAxios";

const UpdateClient = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const client = useLoaderData();
  const onSubmit = async (data) => {
    try{
       const update = await axiosPublic.patch(`/users/${client._id}`, data);
       if (update)
       {        
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your item updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
       }
    }    
    catch (error) {
        console.log(error)
    };
    
  };
  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-8 text-right">
        تعديل بيانات<span className="text-green"> {client.costumerName}</span>
      </h2>

      {/* form here */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
          {/* Numbers & money part */}
          <div className="flex items-center gap-4 flex-col-reverse lg:flex-row">
            {/* حساب مدين */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">حساب مدين*</span>
              </label>
              <input
                type="price"
                {...register("DebitAccount", { required: true })}
                placeholder="حساب مدين"
                className="input input-bordered w-full"
                defaultValue={client.DebitAccount}
              />
            </div>

            {/* الربح */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">الربح*</span>
              </label>
              <input
                type="price"
                {...register("profit", { required: true })}
                placeholder="ربح"
                className="input input-bordered w-full"
                defaultValue={client.profit}
              />
            </div>

            {/* سعر الشركة */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">سعر الشركة *</span>
              </label>
              <input
                type="price"
                {...register("companyPrice", { required: true })}
                placeholder="سعر الشركة "
                className="input input-bordered w-full"
                defaultValue={client.companyPrice}
              />
            </div>

            {/* سعر العميل */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">سعر العميل *</span>
              </label>
              <input
                type="price"
                {...register("costumerPrice", { required: true })}
                placeholder="سعر العميل "
                className="input input-bordered w-full"
                defaultValue={client.costumerPrice}
              />
            </div>
          </div>

          {/* اسم العميل */}
          <div className="form-control w-full mt-6">
            <label className="label">
              <span className="label-text">اسم العميل*</span>
            </label>
            <input
              type="text"
              {...register("costumerName", { required: true })}
              placeholder="اسم العميل"
              className="input input-bordered w-full"
              defaultValue={client.costumerName}
            />
          </div>

          {/* التنفيذ */}
          <div className="flex items-center gap-4">
            {/* منفذها لدينا */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">منفذها لدينا *</span>
              </label>
              <select
                {...register("outlet", { required: true })}
                className="select select-bordered"
                defaultValue={`${client.outlet}`}
              >
                <option disabled value="default">
                  نفذها لدينا
                </option>
                <option value="حازم">حازم</option>
              </select>
            </div>

            {/* نفذت مع */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text"> نفذت مع *</span>
              </label>
              <input
                type="text"
                {...register("doneWith", { required: true })}
                placeholder="نفذت مع "
                className="input input-bordered w-full"
                defaultValue={client.doneWith}
              />
            </div>

            {/* الشركة المنفذة */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">الشركة المنفذة*</span>
              </label>
              <input
                type="text"
                {...register("implementingCompany", { required: true })}
                placeholder="الشركة المنفذة"
                className="input input-bordered w-full"
                defaultValue={client.implementingCompany}
              />
            </div>
          </div>

          {/* معلومات الطيران */}
          <div className="flex items-center gap-4">
            {/* من مطار الى مطار */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">من مطار / مطار *</span>
              </label>
              <input
                type="text"
                {...register("airPorts", { required: true })}
                placeholder="من مطار الى مطار"
                className="input input-bordered w-full"
                defaultValue={client.airPorts}
              />
            </div>

            {/* طيران+الاقلاع */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">طيران+الاقلاع *</span>
              </label>
              <input
                type="text"
                {...register("flightTakeoff", { required: true })}
                placeholder="طيران+الاقلاع "
                className="input input-bordered w-full"
                defaultValue={client.flightTakeoff}
              />
            </div>
          </div>

          {/* البلد و الرقم */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">البلد+الرقم *</span>
            </label>
            <input
              type="text"
              {...register("countryPhone", { required: true })}
              placeholder="البلد و رقم التلفون "
              className="input input-bordered w-full"
              defaultValue={client.countryPhone}
            />
          </div>

          {/* التواريخ */}
          <div className="flex items-center gap-4 flex-col-reverse lg:flex-row mt-6">
            {/* تاريخ الحجز */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">تاريخ الحجز *</span>
              </label>
              <input
                type="text"
                {...register("bookingDate", { required: true })}
                placeholder="تاريخ الحجز"
                className="input input-bordered w-full"
                defaultValue={client.bookingDate.replace(
                  /(\d{4}-\d{2}-\d{2})T.*/,
                  "$1"
                )}
              />
            </div>

            {/* تاريخ السفر */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">تاريخ السفر *</span>
              </label>
              <input
                type="text"
                {...register("travelDate", { required: true })}
                placeholder="تاريخ السفر"
                className="input input-bordered w-full"
                defaultValue={client.travelDate.replace(
                    /(\d{4}-\d{2}-\d{2})T.*/,
                    "$1"
                  )}
              />
            </div>
          </div>

          {/* ملاحظات */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">ملاحظات</span>
            </label>
            <textarea
              {...register("comments", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="ملاحظات"
              defaultValue={"لا يوجد ملاحظات"}
            ></textarea>
          </div>

          <button className="btn bg-green text-white px-6 my-6 ">
            اضافة <IoMdAirplane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateClient;
