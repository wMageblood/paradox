import BluePost from "../../../components/ui/BluePost";

const BlueTracker = () => {
  return (
    <div className=" bg-amber-500 mr-2">
      <div className="mt-15 flex justify-between items-center bg-red-500">
        <h1 className="text-2xl font-500"> Blue Tracker: </h1>
        <a className="text-sm text-primary-600">{`View All ->`}</a>
      </div>
      <div className="grid grid-cols-2 mt-5 bg-blue-500 p-2 rounded-sm overflow-hidden">
        <BluePost tags="warrior mage druid" author="Kyveza" age="02/07/2026" title="The easiest tier since Emerald Nightmare"  />
        <BluePost tags="warrior mage druid" author="Kyveza" age="02/07/2026" title="The easiest tier since Emerald Nightmare"  />
        <BluePost tags="warrior mage druid" author="Kyveza" age="02/07/2026" title="The easiest tier since Emerald Nightmare"  />
        <BluePost tags="warrior mage druid" author="Kyveza" age="02/07/2026" title="The easiest tier since Emerald Nightmare"  />
      </div>
    </div>
  );
};


export default BlueTracker;