import questionMark from "../../assets/red-question-mark.png"

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
    <div className="rounded-sm">
        <div className="flex p-4">
          <img src={questionMark} className=" aspect-3/2 w-15 rounded-sm"/>
          <div className="truncate">
            <a href={href} className="font-500 ml-2">{title}</a>
            <div className="ml-2 flex gap-1">
              {tags!.map((tag) => <a href={tag} className="">{tag}</a>)}
              <a href="#">{author}</a>
              <a href="#">{age}</a>
            </div>
          </div>
        </div>
    </div>
  );
};


export default BluePost;