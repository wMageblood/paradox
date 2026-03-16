import { useState } from "react";

interface ExpansionProp {
  expansionName: string;
  raidName?: string;
}

const RaidRenderer = (expansionProperties: ExpansionProp) => {

  const [visibility, setVisibility] = useState(false)

  const handleClick = () => setVisibility(!visibility);

 return (
  <div className="m-4">
    <button onClick={() => handleClick()} className="px-2 py-4 rounded-sm bg-red-500">{expansionProperties.expansionName|| "expansionName"}</button>
    <div>{visibility && <h2>{ expansionProperties.raidName ||"raidName"}</h2>}</div>
    <p>aczino</p>
 </div>
 )
};

export default RaidRenderer