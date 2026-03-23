import { useState } from "react";
import anima from "../../assets/logo.png";

const Sidebar = () => {

 const [pveToggle, setPveToggle] = useState(true);
 const [pvpToggle, setPvpToggle] = useState(false);

 const handlePveToggle = () => {
  setPvpToggle(false)
  setPveToggle(true)
};


const handlePvpToggle = () => {
  setPveToggle(false)
  setPvpToggle(true);
 };


 const sidebarItems = [
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
  <div className="fixed top-0 left-0 flex h-full w-64 flex-col bg-red-500 border-r border-black z-50">
   <div>
    <img className="px-5 py-2 mt-5" src={anima} />
   </div>
   <div className="*:bg-blue-500 flex *:px-5 *:py-2 my-5">
    <button className="w-full ml-3 rounded-l-sm">PvE</button>
    <button className="w-full mr-3 rounded-r-sm">PvP</button>
   </div>
   <div>
    <ul>
     {sidebarItems.map(({ name, href, key }) => (
      <li key={key} className={`mx-3 py-2.5 hover:bg-blue-500 hover:text-white hover:rounded-sm ${window.location.pathname === href ? "bg-green-500" : "bg-red-500"}`}>
       <a className="ml-2" href={href}>
        {name}
       </a>
      </li>
     ))}
    </ul>
   </div>
   <div className="text-center mt-5 text-green-500 hover:text-green-300">❤︎ Support this site</div>
    <footer className="mt-auto text-center mb-5 border-t">
      <div className="mt-3">
        Discord & X
        <div className="text-sm mt-2 text-gray-500">
          C Paradox @ 2026
        </div>
      </div>
    </footer>
  </div>
 );
};

export default Sidebar;
