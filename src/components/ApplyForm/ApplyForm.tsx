import Logo from "../../assets/logo.png"
import FormInput from "./FormInput";
import formFields from "../../constants/formFields";

const ApplyForm = () => {

  const handleClick = () => console.log(`you clicked send!`);

  return (
    <div className="flex items-center justify-center m-4">
      <div className="md:min-w-3/4 md:min-h-3/4 h-1/2 min-w-1/2 text-center bg-white">
        <div className="flex items-center justify-center pb-15">
          <img className="mt-10" src={`${Logo}`}></img>
        </div>
        {formFields.map(({ formName, formDescription, type }) => (<FormInput formName={formName} formDescription={formDescription} type={type} />))}
        <button onClick={() => handleClick()} className="bg-gray-neutral-500 w-md h-10.5 rounded-lg font-bold shadow-md mb-8">SEND</button>
      </div>
    </div>
  )
}

//clearly we can refactor all this to a single component and just send the properties

export default ApplyForm;