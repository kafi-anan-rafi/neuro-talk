import Link from "next/link";
import { AiOutlineDingtalk } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-slate-950 py-4 border-b px-2 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-blue-200 font-bold text-lg cursor-pointer flex items-center justify-center gap-1 hover:text-blue-100 transition duration-500">
            <Link href={"/"} className="flex gap">
              <AiOutlineDingtalk size={25} />
              NeuroTalk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
