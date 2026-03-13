import { useState } from "react";
import {
 VAULT_OF_THE_INCARNATES,
 ABERRUS_THE_SHADOWED_CRUCIBLE,
 AMIRDRASSIL_THE_DREAMS_HOPE,
} from "../../constants/Dragonflight/DRAGONFLIGHT_RAIDS";
import {
 THE_VOIDSPIRE,
 MARCH_ON_QUELDANAS,
 THE_DREAMRIFT,
} from "../../constants/Midnight/MIDNIGHT_RAIDS";
import {
 NERUBAR_PALACE,
 LIBERATION_OF_UNDERMINE,
 MANAFORGE_OMEGA,
} from "../../constants/The War Within/THE_WAR_WITHIN_RAIDS";

const About = () => {
 const [visibilityDragonflight, setVisibilityDragonflight] = useState(false);
 const [visibilityTheWarWithin, setVisibilityTheWarWithin] = useState(false);
 const [visibilityMidnight, setVisibilityMidnight] = useState(false);

 const handleVisibilityDragonflight = () =>
  setVisibilityDragonflight(!visibilityDragonflight);
 const handleVisibilityMidnight = () =>
  setVisibilityMidnight(!visibilityMidnight);
 const handleVisibilityTheWarWithin = () =>
  setVisibilityTheWarWithin(!visibilityTheWarWithin);

 return (
  <div className="">
   <div>
    <button
     onClick={() => handleVisibilityDragonflight()}
     className="font-600 rounded-lg bg-white px-2 py-4 uppercase"
    >
     DRAGONFLIGHT
    </button>
   </div>
   <div>{visibilityDragonflight && <h2>Vault of the Incarnates</h2>}</div>
   <div className="flex">
    {visibilityDragonflight
     ? VAULT_OF_THE_INCARNATES.map(({ image }) => (
        <div className="mx-px">
         <img className="border border-black" width={35} src={image} />
        </div>
       ))
     : null}
   </div>
   <div>
    {visibilityDragonflight && <h2>Aberrus, the shadowed Crucible</h2>}
   </div>
   <div className="flex">
    {visibilityDragonflight
     ? ABERRUS_THE_SHADOWED_CRUCIBLE.map(({ image }) => (
        <div className="mx-px">
         <img className="border border-black" width={35} src={image} />
        </div>
       ))
     : null}
   </div>
   <div>{visibilityDragonflight && <h2>Amirdrassil, the Dream's Hope</h2>}</div>
   <div className="flex">
    {visibilityDragonflight
     ? AMIRDRASSIL_THE_DREAMS_HOPE.map(({ image }) => (
        <div className="mx-px">
         <img className="border border-black" width={35} src={image} />
        </div>
       ))
     : null}
   </div>
   <div>
    <button
     onClick={() => handleVisibilityMidnight()}
     className="font-600 rounded-lg bg-white px-2 py-4 uppercase"
    >
     MIDNIGHT
    </button>
   </div>
   <div>{visibilityMidnight && <h2>The Voidspire</h2>}</div>
   <div className="flex">
    {visibilityMidnight
     ? THE_VOIDSPIRE.map(({ image }) => (
        <div className="mx-px">
         <img className="border border-black" width={35} src={image} />
        </div>
       ))
     : null}
   </div>
   <div>{visibilityMidnight && <h2>The Dreamrift</h2>}</div>
   <div className="flex">
    {visibilityMidnight
     ? THE_DREAMRIFT.map(({ image }) => (
        <div className="mx-px">
         <img className="border border-black" width={35} src={image} />
        </div>
       ))
     : null}
   </div>
   <div>{visibilityMidnight && <h2>March on Quel'Danas</h2>}</div>
   <div className="flex">
    {visibilityMidnight
     ? MARCH_ON_QUELDANAS.map(({ image }) => (
        <div className="mx-px">
         <img className="border border-black" width={35} src={image} />
        </div>
       ))
     : null}
   </div>
   <div>
    <button
     onClick={() => handleVisibilityTheWarWithin()}
     className="font-600 rounded-lg bg-white px-2 py-4 uppercase"
    >
     THE WAR WITHIN
    </button>
   </div>
   <div>{visibilityTheWarWithin && <h2>Nerub'ar Palace</h2>}</div>
   <div className="flex">
    {visibilityTheWarWithin
     ? NERUBAR_PALACE.map(({ image }) => (
        <div className="mx-px">
         <img className="border border-black" width={35} src={image} />
        </div>
       ))
     : null}
   </div>
   <div>{visibilityTheWarWithin && <h2>Liberation of Undermine</h2>}</div>
   <div className="flex">
    {visibilityTheWarWithin
     ? LIBERATION_OF_UNDERMINE.map(({ image }) => (
        <div className="mx-px">
         <img className="border border-black" width={35} src={image} />
        </div>
       ))
     : null}
   </div>
   <div>{visibilityTheWarWithin && <h2>Manaforge Omega</h2>}</div>
   <div className="flex">
    {visibilityTheWarWithin
     ? MANAFORGE_OMEGA.map(({ image }) => (
        <div className="mx-px">
         <img className="border border-black" width={35} src={image} />
        </div>
       ))
     : null}
   </div>
  </div>
 );
};

export default About;
