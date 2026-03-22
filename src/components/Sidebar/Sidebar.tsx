import anima from "../../assets/logo.png"

const Sidebar = () => {


  const sidebarItems = [
     {name: "Home", href: "./"},
     {name: "Looking for Group", href: "looking-for-group"},
     {name: "Blue Tracker", href: "blue-tracker"},
     {name: "Class Changes", href: "class-changes"},
     {name: "PvE Guides", href: "pve-guides"},
     {name: "Leaderboards", href: "leaderboards"},
     {name: "Stats", href: "stats"},
     {name: "Tier List", href: "tier-list"},
     {name: "Tournaments", href: "tournaments"},
     {name: "Community", href: "community"},
  ];


  return (
    <div className="fixed top-0 left-0 w-64 bg-red-500 h-full flex flex-col">
      <div><img src={anima} /></div>
      <div>
        <ul>
          {sidebarItems.map(({name, href}) => <li><a href={href}>{name}</a></li>)}
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