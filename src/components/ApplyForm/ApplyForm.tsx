import Logo from "../../assets/logo.png"

const ApplyForm = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-10 my-10 h-screen w-screen bg-white rounded-lg shadow-2xl">
        <div>
          <img className="" height={500} width={500} src={`${Logo}`}></img>
        </div>
      </div>
    </div>
  )
}

export default ApplyForm;