import mainLogo from "../../../assets/anima.png"
import SearchBar from "../../../components/ui/SearchBar";
import TABS from "../../../constants/tabs.ts"

const Pve = () => {


  return (
    <div>
      <img className="block mx-auto mt-45" width={375} src={mainLogo} />
      <p className="text-center text-sm text-gray-600">Ato Ata, chiguegue guata, ele eau'te e auta' eee ata oto</p>
      <div className="flex mt-15 items-center justify-center">
        <SearchBar placeholder="esh-galakrond" searchbarStyling="w-2xl bg-primary-900 rounded-l-xl focus:ring-0 focus:border-1 border-1 border-primary-900" buttonText="🔎 Search"/>
      </div>
      <div className="flex justify-center items-center mt-5 gap-3">
          {TABS.map(({icon, text, href}) => <a href={href} className="bg-primary-900 -transform-transition duration-300 hover:bg-primary-900/50 rounded-full px-4 py-1 text-white border border-neutral-500 ">{`${icon} ${text}`}</a>)}
      </div>
    </div>
  );
};

export default Pve;