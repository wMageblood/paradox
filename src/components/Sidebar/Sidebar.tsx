import anima from "../../assets/logo.png";

const Sidebar = () => {
 const sidebarItems = [
  { name: "Home", href: "./" },
  { name: "Looking for Group", href: "looking-for-group" },
  { name: "Blue Tracker", href: "blue-tracker" },
  { name: "Class Changes", href: "class-changes" },
  { name: "PvE Guides", href: "pve-guides" },
  { name: "Leaderboards", href: "leaderboards" },
  { name: "Stats", href: "stats" },
  { name: "Tier List", href: "tier-list" },
  { name: "Tournaments", href: "tournaments" },
  { name: "Community", href: "community" },
 ];

 return (
  <div className="fixed top-0 left-0 flex h-full w-64 flex-col bg-red-500">
   <div>
    <img src={anima} />
   </div>
   <div className="*:bg-blue-500 flex *:px-5 *:py-2 my-5 *:hover:bg-green-500">
    <button className="w-full ml-3 rounded-l-sm">PvE</button>
    <button className="w-full mr-3 rounded-r-sm">PvP</button>
   </div>
   <div>
    <ul>
     {sidebarItems.map(({ name, href }) => (
      <li className="mx-3 py-1 hover:bg-blue-500 hover:rounded-sm">
       <a className="ml-2" href={href}>
        {name}
       </a>
      </li>
     ))}
    </ul>
   </div>
   <div> Support Me </div>
   <div className="">
    <div> DISCORD • X</div>
    <div> © XXXXXXX • vX.XX</div>
   </div>
  </div>
 );
};

export default Sidebar;
