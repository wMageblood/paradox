import { useState } from "react";
import DRAGONFLIGHT_RAIDS from "../../constants/Dragonflight/DRAGONFLIGHT_RAIDS";
import THE_WAR_WITHIN_RAIDS from "../../constants/The War Within/THE_WAR_WITHIN_RAIDS";
import MIDNIGHT_RAIDS from "../../constants/Midnight/MIDNIGHT_RAIDS";


const RaidRenderer = () => {


  const [dragonflightVisibility, setDragonflightVisibility] = useState(false)
  const [twwVisibility, setTwwVisibility] = useState(false)
  const [midnightVisibility, setMidnightVisibility] = useState(false)


  const handleDragonflightClick = () => setDragonflightVisibility(!dragonflightVisibility);
  const handleTwwflightClick = () => setTwwVisibility(!twwVisibility);
  const handleMidnightClick = () => setMidnightVisibility(!midnightVisibility);


 return (
  <div className="m-5">
      <div className="flex justify-center items-center">
        <button onClick={() => handleDragonflightClick()} className="px-2 py-4 mr-5 rounded-sm bg-red-500">Dragonflight</button>
        <button onClick={() => handleTwwflightClick()} className="px-2 py-4 rounded-sm bg-red-500">The War Within</button>
        <button onClick={() => handleMidnightClick()} className="px-2 py-4 ml-5 rounded-sm bg-red-500">Midnight</button>
      </div>
      <div className="p-3 w-full justify-center items-center">
        <div className="bg-green-500 *:font-Geist font-500 py-2">
          {dragonflightVisibility ? DRAGONFLIGHT_RAIDS.map(({raidName, images}) => (<div className="leading-5 px-3">{raidName}<div className="flex mb-3">{images.map((img, idx) => (<img className="border border-black mx-px" key={idx} src={img} width={35} />))}</div></div>)) : null}
          {twwVisibility ? THE_WAR_WITHIN_RAIDS.map(({raidName, images}) => (<div className="leading-5 px-3">{raidName}<div className="flex mb-3">{images.map((img, idx) => (<img className="border border-black mx-px" key={idx} src={img} width={35} />))}</div></div>)) : null}
          {midnightVisibility ? MIDNIGHT_RAIDS.map(({raidName, images}) => (<div className="leading-5 px-3">{raidName}<div className="flex mb-3">{images.map((img, idx) => (<img className="border border-black mx-px" key={idx} src={img} width={35} />))}</div></div>)) : null}
        </div>
    </div>
  </div>
    )
  };

  export default RaidRenderer;