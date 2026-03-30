import BluePost from "../../../components/ui/BluePost";
import BLUE_POSTS from "../../../constants/bluePost";

const BlueTracker = () => {
  return (
    <div className="mx-25 rounded-sm">
      <div className="mt-15 flex justify-between items-center">
        <h1 className="text-2xl font-500"> Blue Tracker: </h1>
        <a className="text-sm text-primary-600">{`View All ->`}</a>
      </div>
      <div className="grid grid-cols-2 mt-5 p-2 rounded-sm">
        {BLUE_POSTS.map(({title, author, age, href, tags}) => <BluePost title={title} author={author} age={age} href={href} tags={tags} />)}
      </div>
    </div>
  );
};


export default BlueTracker;