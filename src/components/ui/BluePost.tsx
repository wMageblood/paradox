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
    <div className="rounded-sm bg-third-background hover:bg-third-background/50">
        <div className="flex p-4">
          <img src={questionMark} className=" aspect-3/2 w-15 rounded-sm"/>
          <div className="truncate">
            <a href={href} className="font-500 ml-2 text-white">{title}</a>
            <div className="ml-2 flex gap-1">
              {tags!.map((tag) => <a href={tag} className={`${tagStyles[tag]} px-2 py-1`}>{tag}</a>)}
              <a className="py-1" href="#">{author}</a>
              <a className="" href="#">{age}</a>
            </div>
          </div>
        </div>
    </div>
  );
};


export default BluePost;