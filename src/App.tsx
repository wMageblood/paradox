import { useState } from "react";
import Sidebar from "./features/sidebar/components/Sidebar";
import Pve from "./features/pve/components/PvE";
import Pvp from "./features/pvp/components/PvP";
import SearchBar from "./components/ui/SearchBar";

const App = () => {

  const [visibility, setVisibility] = useState<'pve' | 'pvp'>('pve')

  return (
    <div>
      <Sidebar visibility={visibility} setVisibility={setVisibility} />
      <div className="ml-66 mt-2">
        <div className="mb-2">
          <SearchBar />
        </div>
        {visibility === 'pve' ? <Pve /> : <Pvp />}
      </div>
    </div>

  );
};

export default App;
