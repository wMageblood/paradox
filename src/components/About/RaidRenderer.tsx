import { useState } from "react";
import * as Raids from "../../constants" //

interface RaidItem {
  boss: string;
  order: number;
  image: string;
}

interface RaidData {
  expansionName?: string;
  raidName?: string;
  raidKey: string;
}

const RaidRenderer = ( raidData: RaidData) => {

  const [visibility, setVisibility] = useState(false)

  const handleClick = () => setVisibility(!visibility);

 return (
  <div className="m-4">
    <button onClick={() => handleClick()} className="px-2 py-4 rounded-sm bg-red-500">{raidData.expansionName || "expansionName"}</button>
    <div>{visibility && <h2>{raidData.raidName || "raidName"}</h2>}</div>
    <div className="flex">{visibility ? ((Raids as any)[raidData.raidKey] as RaidItem[]).map(({image, boss}) => <img className="border border-black" src={image} width={35} />) : null}</div>
  </div>
 )
};

export default RaidRenderer