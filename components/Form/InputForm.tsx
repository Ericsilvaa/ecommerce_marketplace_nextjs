"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
};

const InputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <input
            // defaultValue="test"
            placeholder="Digite seu Nome"
            {...(register("example"), { required: true })}
            className="rounded-md outline-none p-1"
          />
          {errors.example && (
            <span className="text-red-400">This field is Required</span>
          )}
        </div>

        {/* <input
          type="submit"
          className="cursor-pointer bg-slate-400 px-6 py-1 font-bold rounded-md "
        /> */}
      </form>
    </>
  );
};

export default InputForm;
