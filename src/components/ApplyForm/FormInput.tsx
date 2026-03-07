interface FormData {
  formName: string;
  formDescription: string;
  type?: string;
}

const FormInput = (formData: FormData) => {
  return (
    <div className="flex flex-col text-left py-5 mx-10">
      <label className="text-[12px] text-slate-500">{formData.formName}</label>
      <input className="w-md rounded-lg border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md" type={formData.type || "text"}></input>
      <p className="text-[12px] text-slate-500">{formData.formDescription}</p>
    </div>
  )
}

export default FormInput;

{/* <div className="flex flex-col text-left mx-10">
  <label className="text-[12px] text-slate-500">Main Class/Roles</label>
  <input className="w-md rounded-lg border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md" type="text"></input>
</div> */}