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
      <div className="">
        <div className="bg-slate-700 px-6 py-3 flex">
          <div>
            <img className="w-24 h-14 rounded-lg" src={questionMark} />
          </div>
          <div className="inline-block">
            <div className="mx-2 font-500 text-white">
              {title}
            </div>
            <div className="mx-1 flex">
              {tags!.map((tag) => <a href={tag} className={`mx-px px-2 py-1 ${tagStyles[tag]}`}>{tag}</a>)}
              <span className="text-green-600 font-800 ml-1 text-sm"><a href={`user/${author}/posts`}>{`${author}`}</a></span>
              <span className="mx-1 text-slate-500 text-sm">• {age}</span>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
  );
};


export default BluePost;