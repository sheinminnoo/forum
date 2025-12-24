import Link from "next/link";
import { IoHome, IoTrendingUp, IoLogOutOutline } from "react-icons/io5";
import { FaTags, FaQuestionCircle } from "react-icons/fa";
import { MdNewReleases } from "react-icons/md";
import ROUTES from "@/routes";

async function LeftSideBar() {
  return (
    <div className="w-1/5 px-5 py-2">
      <ul className="space-y-4">
        <li className="bg-[#0092EF] py-3 px-3 rounded-xl">
          <Link
            href="/"
            className="text-md font-bold flex items-center space-x-4"
          >
            <IoHome />
            <span>Home</span>
          </Link>
        </li>

        <li className="bg-[#081338] py-3 px-3 rounded-xl">
          <Link
            href={ROUTES.TAGS}
            className="text-md font-bold flex items-center space-x-4"
          >
            <FaTags />
            <span>Tags</span>
          </Link>
        </li>

        <li className="bg-[#081338] py-3 px-3 rounded-xl">
          <Link
            href={ROUTES.NEWEST}
            className="text-md font-bold flex items-center space-x-4"
          >
            <MdNewReleases />
            <span>Newest</span>
          </Link>
        </li>

        <li className="bg-[#081338] py-3 px-3 rounded-xl">
          <Link
            href={ROUTES.ASK_QUESTION}
            className="text-md font-bold flex items-center space-x-4"
          >
            <FaQuestionCircle />
            <span>Ask Questions</span>
          </Link>
        </li>

        <li className="bg-[#081338] py-3 px-3 rounded-xl">
          <Link
            href={ROUTES.POPULAR}
            className="text-md font-bold flex items-center space-x-4"
          >
            <IoTrendingUp />
            <span>Popular</span>
          </Link>
        </li>

        <li className="bg-red-500 py-3 px-3 rounded-xl">
          <Link
            href="/"
            className="text-md font-bold flex items-center space-x-4"
          >
            <IoLogOutOutline />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftSideBar;
