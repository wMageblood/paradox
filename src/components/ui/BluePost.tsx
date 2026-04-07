import questionMark from "../../assets/red-question-mark.png"
import { tagStyles } from "../../constants/tagStyles";

type BluePostProps = Partial<{
  image: string;
  title: string;
  tags: string[];
  author: string;
  age: string;
  href: string;
}>;


const BluePost = ({title, tags, author, age, href}: BluePostProps) => {
  return (
      <div className="mt-5">
        <div className="bg-slate-700 px-6 py-3 flex">
          <div>
            <img className="w-32 h-20 rounded-lg" src={questionMark} />
          </div>
          <div className="inline-block">
            <div>
              {title}
            </div>
            <div className="">
              {tags!.map((tag) => <a className={`mx-1 px-2 py-1 ${tagStyles[tag]}`}>{tag}</a>)}
              {author}
              {` • ${age}`}
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
  );
};


export default BluePost;