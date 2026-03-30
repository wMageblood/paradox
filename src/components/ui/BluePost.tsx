import questionMark from "../../assets/red-question-mark.png"

type BluePostProps = Partial<{
  image: string;
  title: string;
  tags: string;
  author: string;
  age: string;
}>;


const BluePost = ({title, tags, author, age}: BluePostProps) => {
  return (
    <div className="mr-2 rounded-sm">
      <div className="flex p-4 hover:bg-blue-500/50">
        <img src={questionMark} className=" aspect-3/2 w-15 rounded-sm"/>
        <div>
          <h1 className="font-500 ml-2">{title}</h1>
          <div className="ml-2 flex gap-3">
            <a href="#">{tags}</a>
            <a href="#">{author}</a>
            <a href="#">{age}</a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BluePost;