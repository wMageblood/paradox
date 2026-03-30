import BluePost from "../../../components/ui/BluePost";

const BlueTracker = () => {
  return (
    <div className="">
      <div className="mt-15 flex justify-between items-center bg-red-500 mr-2">
        <h1 className="text-2xl font-500"> Blue Tracker: </h1>
        <a className="text-sm text-primary-600">{`View All ->`}</a>
      </div>
      <div>
        <BluePost />
      </div>
    </div>
  );
};


export default BlueTracker;