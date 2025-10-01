import { PenBox, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";

// type NoteProp = {
//   _id: number,
//   title: string,
//   content: string,
//   createdAt: string,
// };

const NoteCard = ({ note }) => {
  return (
    <Link
      className="card  bg-neutral text-neutral-content hover:shadow-lg transition-all duration-200 border-t-4  border-solid border-[#4b2121] py-3 px-5 hover:scale-105"
      to={`/note/${note._id}`}
    >
      <div className="card-body card">
        <h1 className="text-xl text-white font-bold tracking-wide">
          {note.title}
        </h1>
        <p className="text-lg mt-1 mb-5 text-stone-400">{note.content}</p>
        <div className="flex items-center justify-between">
          <span className="text-xm">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex space-x-3">
            <button className="cursor-pointer hover:scale-110 transition-all duration-200">
              <PenBox className="size-4 text-green-700" />
            </button>
            <button className="cursor-pointer hover:scale-110 transition-all duration-200">
              <Trash2Icon className="size-4 text-red-700" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default NoteCard;
