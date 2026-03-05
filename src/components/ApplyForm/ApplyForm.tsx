import Logo from "../../assets/logo.png"

const ApplyForm = () => {

  const handleClick = () => console.log(`you clicked send!`);

  return (
    <div className="flex items-center justify-center m-4">
      <div className="md:min-w-3/4 md:min-h-3/4 h-1/2 min-w-1/2 text-center bg-white">
        <div className="flex items-center justify-center pb-15">
          <img className="mt-10" src={`${Logo}`}></img>
        </div>
        <div className="flex flex-col text-left mx-10">
          <label className="text-[12px] text-slate-500">Main Class/Roles</label>
          <input className="w-md rounded-lg border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md" type="text"></input>
        </div>
        <div className="flex flex-col text-left m-10">
          <label className="text-[12px] text-slate-500">What classes do you play?</label>
          <input className="w-md rounded-lg border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md" type="text"></input>
        </div>
        <div className="flex flex-col text-left m-10">
          <label className="text-[12px] text-slate-500">Warcraftlogs</label>
          <input className="w-md rounded-lg border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md" type="text"></input>
          <p className="text-[12px] text-slate-500">If private include login information.</p>
        </div>
        <div className="flex flex-col text-left m-10">
          <label className="text-[12px] text-slate-500"><span className="font-bold">Main</span> armory</label>
          <input className="w-md rounded-lg border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md" type="text"></input>
        </div>
        <div className="flex flex-col text-left m-10">
          <label className="text-[12px] text-slate-500">Alt Armory</label>
          <input className="w-md rounded-lg border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md" type="text"></input>
          <p className="text-[12px] text-slate-500">If you've more than 1 alt, feel free to paste all armories.</p>
        </div>
        <div className="flex flex-col text-left m-10">
          <label className="text-[12px] text-slate-500">Raid experience</label>
          <input className="w-md rounded-lg border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md" type="text"></input>
          <p className="text-[12px] text-slate-500">Last 3 guilds, guilds you killed with them, reasons for leaving.</p>
        </div>
        <div className="flex flex-col text-left m-10">
          <label className="text-[12px] text-slate-500">Reason for applying here</label>
          <input className="w-md rounded-lg border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md" type="text"></input>
        </div>
        <div className="flex flex-col text-left m-10">
          <label className="text-[12px] text-slate-500">Picture of UI in raid combat</label>
          <input className="w-md rounded-lg border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md" type="text"></input>
          <p className="text-[12px] text-slate-500">Paste a link or drop the file itself.</p>
        </div>
        <div className="flex flex-col text-left m-10">
          <label className="text-[12px] text-slate-500">Gender</label>
          <input className="w-md rounded-lg border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md" type="text"></input>
          <p className="text-[12px] text-slate-500">🚁🚁</p>
        </div>
        <div className="flex flex-col text-left m-10">
          <label className="text-[12px] text-slate-500">Age</label>
          <input className="w-md rounded-lg border-primary-background bg-primary-background focus:ring-primary-background focus:border-primary-background inset-shadow-md" type="text"></input>
        </div>
        <button onClick={() => handleClick()} className="bg-gray-neutral-500 w-md h-10.5 rounded-lg font-bold shadow-md mb-8">SEND</button>
      </div>
    </div>
  )
}

//clearly we can refactor all this to a single component and just send the properties

export default ApplyForm;