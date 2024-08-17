/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/UsePublicAxios";
import { IoMdAirplane } from "react-icons/io";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";

const AddClient = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    try{
      await axiosPublic.post("/users", data);      
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Item is inserted successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      
    }
    catch (error){
      Swal.fire({
        title: "!هذا الاسم موجود بالفعل",
        input:"!هل تريد تعديله",
        icon: "wrong",
        iconHtml: "x",
        showConfirmButton: false,
          timer: 1500,
      })
  }
  };

  // calculate profit logic
  const [costumerPrice, setCostumerPrice] = useState(0);
  const [companyPrice, setCompanyPrice] = useState(0);
  const [result, setResult] = useState(0);

  const handleCompanyPrice = (e) => {
    setCompanyPrice(parseInt(e.target.value));
  };

  const handleCostumerPrice = (e) => {
    setCostumerPrice(parseInt(e.target.value));
  };

  const handleCalculater = () => {
    const save = costumerPrice - companyPrice;
    setResult(save);
  };

  const handleResults = (e) => {
    setResult(parseInt(e.target.value));
  };

  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-8 text-right">
        إضافة <span className="text-green"> عميلة جديدة</span>
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
              />
            </div>

            {/* الربح */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">الربح*</span>
              </label>
              <div className="flex">
                <input
                  type="price"
                  {...register("profit", { required: true })}
                  placeholder="ربح"
                  className="input input-bordered w-full"
                  defaultValue={0}
                  value={Number.isNaN(result) ? 0 : result}
                  onChange={handleResults}
                />
                <button
                  className="btn bg-green text-white"
                  onClick={handleCalculater}
                >
                  Calc
                </button>
              </div>
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
                defaultValue={0}
                onChange={handleCompanyPrice}
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
                defaultValue={0}
                onChange={handleCostumerPrice}
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
                defaultValue="default"
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
                type="date"
                {...register("bookingDate", { required: true })}
                placeholder="تاريخ الحجز"
                className="input input-bordered w-full"
              />
            </div>

            {/* تاريخ السفر */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">تاريخ السفر *</span>
              </label>
              <input
                type="date"
                {...register("travelDate", { required: true })}
                placeholder="تاريخ السفر"
                className="input input-bordered w-full"
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

export default AddClient;
