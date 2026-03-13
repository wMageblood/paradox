import { useState } from "react";
import EXPANSIONS from "../../constants/Ascended/EXPANSIONS";
import {
  VAULT_OF_THE_INCARNATES,
  ABERRUS_THE_SHADOWED_CRUCIBLE,
  AMIRDRASSIL_THE_DREAMS_HOPE,
} from "../../constants/Dragonflight/dragonflightRaids";

const About = () => {
  const [visibility, setVisibility] = useState(false);

  const handleVisibility = () => setVisibility(!visibility);

  return (
    <div className="">
      <div>
        {EXPANSIONS.map(({ played }) => (
          <button
            onClick={() => handleVisibility()}
            className="font-600 rounded-lg bg-white px-2 py-4 uppercase"
          >
            {played}
          </button>
        ))}
      </div>
      <div className="flex">
        {visibility === true ? (
          VAULT_OF_THE_INCARNATES.map(({ image }) => (
            <div className="mx-px">
              <img className="border border-black" width={35} src={image} />
            </div>
          ))
        ) : (
          <p>returning false</p>
        )}
      </div>
      <div>
        <p>Aberrus:</p>
      </div>
      <div className="flex">
        {visibility === true ? (
          ABERRUS_THE_SHADOWED_CRUCIBLE.map(({ image }) => (
            <div className="mx-px">
              <img className="border border-black" width={35} src={image} />
            </div>
          ))
        ) : (
          <p>returning false</p>
        )}
      </div>
      <div>
        <p>Amirdrassil</p>
      </div>
      <div className="flex">
        {visibility === true ? (
          AMIRDRASSIL_THE_DREAMS_HOPE.map(({ image }) => (
            <div className="mx-px">
              <img className="border border-black" width={35} src={image} />
            </div>
          ))
        ) : (
          <p>returning false</p>
        )}
      </div>
    </div>
  );
};

export default About;
