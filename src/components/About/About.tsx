import { useState } from "react";
import * as Raids from "../../constants/";

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
     ? Raids.VAULT_OF_THE_INCARNATES.map(({ image }) => (
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
     ? Raids.ABERRUS_THE_SHADOWED_CRUCIBLE.map(({ image }) => (
        <div className="mx-px">
         <img className="border border-black" width={35} src={image} />
        </div>
       ))
     : null}
   </div>
   <div>{visibilityDragonflight && <h2>Amirdrassil, the Dream's Hope</h2>}</div>
   <div className="flex">
    {visibilityDragonflight
     ? Raids.AMIRDRASSIL_THE_DREAMS_HOPE.map(({ image }) => (
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
     ? Raids.THE_VOIDSPIRE.map(({ image }) => (
        <div className="mx-px">
         <img className="border border-black" width={35} src={image} />
        </div>
       ))
     : null}
   </div>
   <div>{visibilityMidnight && <h2>The Dreamrift</h2>}</div>
   <div className="flex">
    {visibilityMidnight
     ? Raids.THE_DREAMRIFT.map(({ image }) => (
        <div className="mx-px">
         <img className="border border-black" width={35} src={image} />
        </div>
       ))
     : null}
   </div>
   <div>{visibilityMidnight && <h2>March on Quel'Danas</h2>}</div>
   <div className="flex">
    {visibilityMidnight
     ? Raids.MARCH_ON_QUELDANAS.map(({ image }) => (
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
     ? Raids.NERUBAR_PALACE.map(({ image }) => (
        <div className="mx-px">
         <img className="border border-black" width={35} src={image} />
        </div>
       ))
     : null}
   </div>
   <div>{visibilityTheWarWithin && <h2>Liberation of Undermine</h2>}</div>
   <div className="flex">
    {visibilityTheWarWithin
     ? Raids.LIBERATION_OF_UNDERMINE.map(({ image }) => (
        <div className="mx-px">
         <img className="border border-black" width={35} src={image} />
        </div>
       ))
     : null}
   </div>
   <div>{visibilityTheWarWithin && <h2>Manaforge Omega</h2>}</div>
   <div className="flex">
    {visibilityTheWarWithin
     ? Raids.MANAFORGE_OMEGA.map(({ image }) => (
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
