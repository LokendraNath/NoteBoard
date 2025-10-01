import { NotebookPen, PlusIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-amber-950 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-mono text-white flex items-center font-bold">
            <NotebookPen className="size-8 mr-3" />
            NoteBoard
          </h1>
          <div>
            <Link
              to="/create"
              className="flex text-2xl items-center btn btn-dash"
            >
              <PlusIcon className="size-5 mr-2" /> <span>Create</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
