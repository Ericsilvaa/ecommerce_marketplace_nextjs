import React from "react";
import InputForm from "@/components/Form/InputForm";
import InputFormFields from "@/components/Form/InputFormFields";

const LoginPage = () => {
  return (
    <div className="container mx-auto flex justify-center mt-5 bg-slate-300 w-[450px] p-1 rounded-md">
      <div className="space-y-5">
        <h2 className="text-center mt-3 text-xl">Teste React-Hook-Form</h2>
        <InputForm />
        <hr />
        <InputFormFields />
      </div>
    </div>
  );
};

export default LoginPage;
