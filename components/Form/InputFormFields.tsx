"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
}

const InputFormFields = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-x-2">
          <label>First Name</label>
          <input {...register("firstName")} />
        </div>

        <div className="mt-3 space-x-2">
          <label>Gender Selection</label>
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </div>

        <input
          type="submit"
          className="cursor-pointer bg-slate-400 px-6 py-1 font-bold rounded-md mt-3"
        />
      </form>
    </>
  );
};

export default InputFormFields;
