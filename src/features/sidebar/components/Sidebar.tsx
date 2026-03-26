import { useState } from "react";
import anima from "../../../assets/logo.png";

const Sidebar = () => {


const [visibility, setVisibility] = useState<'pve' | 'pvp'>('pve');


 const pveSidebarItems = [
  { name: "Home", href: "/", key: 1 },
  { name: "Looking for Group", href: "/looking-for-group", key: 2 },
  { name: "Blue Tracker", href: "/blue-tracker", key: 3 },
  { name: "Class Changes", href: "/class-changes", key: 4 },
  { name: "PvE Guides", href: "/pve-guides", key: 5 },
  { name: "Leaderboards", href: "/leaderboards", key: 6 },
  { name: "Stats", href: "/stats", key: 7 },
  { name: "Tier List", href: "/tier-list", key: 8 },
  { name: "Tournaments", href: "/tournaments", key: 9 },
  { name: "Community", href: "/community", key: 10 },
 ];


 return (
  <div className="fixed top-0 left-0 w-64 h-full border-r z-50 flex flex-col bg-red-500 transition-transform duration-300 -translate-x-full lg:translate-x-0">
   <div>
    <img className="px-5 py-2 mt-5" src={anima} />
   </div>
   <div className="flex *:px-5 *:py-2 my-5">
    <button onClick={() => setVisibility('pve')} className={`w-full ml-3 rounded-l-sm ${visibility === 'pve' ? "bg-green-500 text-red-500" : "bg-gray-600 text-gray-950"}`}>PvE</button>
    <button onClick={() => setVisibility('pvp')} className={`w-full mr-3 rounded-r-sm ${visibility === 'pvp' ? "bg-green-500 text-red-500" : "bg-gray-600 text-gray-950"}`}>PvP</button>
   </div>
   <div>
    <ul>
      {pveSidebarItems.map(({name, href, key}) => <li key={key} className={`mx-3 py-2.5 hover:bg-blue-500 hover:text-white hover:rounded-sm ${window.location.pathname === href ? "bg-green-500 rounded-sm" : "bg-red-500"}`}><a className={`ml-2`} href={href}>{name}</a></li>)}
    </ul>
   </div>
   <div className="text-center mt-5 text-green-500 hover:text-green-300">❤︎ Support this site</div>
    <footer className="mt-auto text-center mb-5 border-t">
      <div className="mt-3">
        Discord & X & X
        <div className="text-sm mt-2 text-gray-500">
          C Paradox @ 2026
        </div>
      </div>
    </footer>
  </div>
 );
};

export default Sidebar;
