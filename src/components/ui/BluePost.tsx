import questionMark from "../../assets/red-question-mark.png"

type BluePostProps = Partial<{
  image: string;
  title: string;
  tags: string;
  author: string;
  age: string;
}>;


const BluePost = ({image, title, tags, author, age}: BluePostProps) => {
  return (
    <div className="bg-green-500">
      <div className="mt-5 flex p-3">
        <img src={questionMark} className=" aspect-3/2 w-15 rounded-sm"/>
        <div>
          <h1 className="font-500 ml-2">Class Tuning Incoming - March 31</h1>
          <div className="ml-2 flex gap-3">
            <p>PVP WARRIOR</p>
            <p>author</p>
            <p>age</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BluePost;