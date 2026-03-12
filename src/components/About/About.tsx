import { useState } from "react";
import MANAFORGE_OMEGA from "../../constants/The War Within/MANAFORGE_OMEGA";
import dragonflightRaids from "../../constants/Dragonflight/dragonflightRaids.ts";

const About = () => {
  const [dragonflightRaidInfo, setDragonflightRaidInfo] = useState(false);
  const [theWarWithinRaidInfo, setTheWarWithinRaidInfo] = useState(false);
  const [midnightRaidInfo, setMidnightRaidInfo] = useState(false);
  const [raidBreakdown, setRaidBreakdown] = useState(false);

  const handleDragonflightClick = () => {
    setDragonflightRaidInfo(!dragonflightRaidInfo);
    setMidnightRaidInfo(false);
    setTheWarWithinRaidInfo(false);
  };

  const handleTheWarWithinClick = () => {
    setTheWarWithinRaidInfo(!theWarWithinRaidInfo);
    setMidnightRaidInfo(false);
    setDragonflightRaidInfo(false);
  };

  const handleMidnightClick = () => {
    setMidnightRaidInfo(!midnightRaidInfo);
    setTheWarWithinRaidInfo(false);
    setDragonflightRaidInfo(false);
  };

  const handleRaidBreakdown = () => {
    setRaidBreakdown(!raidBreakdown);
  };

  return (
    <div className="">
      <div className="">
        <button
          onClick={() => handleDragonflightClick()}
          className="rounded-lg bg-red-400 px-4 py-2"
        >
          Dragonflight
        </button>
        <button
          onClick={() => handleTheWarWithinClick()}
          className="rounded-lg bg-amber-400 px-4 py-2"
        >
          The War Within
        </button>
        <button
          onClick={() => handleMidnightClick()}
          className="rounded-lg bg-purple-400 px-4 py-2"
        >
          Midnight
        </button>
      </div>
      {dragonflightRaidInfo === true
        ? dragonflightRaids.map(({ raidName, bosses }) => (
            <div>
              <button
                className="mx-5 rounded-lg bg-blue-500 px-4 py-2"
                onClick={() => handleRaidBreakdown()}
              >
                {raidName}
              </button>
              {raidBreakdown === true
                ? bosses.map((boss) => <p>{boss}</p>)
                : null}
            </div>
          ))
        : null}
      {theWarWithinRaidInfo === true ? (
        <p>nerubar, liberation, manafortge</p>
      ) : null}
      {midnightRaidInfo === true
        ? MANAFORGE_OMEGA.map(({ bossName }) => <p>{bossName}</p>)
        : null}
    </div>
  );
};

export default About;
