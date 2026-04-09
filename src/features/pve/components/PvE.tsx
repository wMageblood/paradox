import mainLogo from "../../../assets/anima.png"
import SearchBar from "../../../components/ui/SearchBar";
import TABS from "../../../constants/tabs.ts"
import BlueTracker from "../../blue-tracker/components/BlueTracker.tsx";
import Tabs from "../../../components/ui/Tabs.tsx";

const Pve = () => {


  return (
    <div>
      <img className="block mx-auto mt-45" width={375} src={mainLogo} />
      <p className="text-center text-sm text-gray-600">Ato Ata, chiguegue guata, ele eau'te e auta' eee ata oto</p>
      <div className="flex mt-15 items-center justify-center">
        <SearchBar placeholder="esh-galakrond" searchbarStyling="w-md lg:w-2xl bg-primary-900 rounded-l-xl focus:ring-0 focus:border-1 border-1 border-primary-900" buttonText="🔎 Search"/>
      </div>
      <div className="flex mt-5 gap-3 justify-center flex-wrap lg:flex-nowrap">
          {TABS.map(({icon, text, href}) => <Tabs icon={icon} text={text} href={href} />)}
    </div>
      <div className="">
        <BlueTracker />
      </div>
    </div>
  );
};

export default Pve;