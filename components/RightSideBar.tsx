import Link from "next/link";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import {
  FaReact,
  FaVuejs,
  FaPython,
  FaLaravel,
  FaNodeJs,
} from "react-icons/fa";

function RightSideBar() {
  const qRow =
    "flex items-start gap-3 py-2 text-[16px] text-white/70 hover:text-white transition";
  const qIcon = "mt-1 shrink-0 text-main";

  const tagRow =
    "flex items-center gap-3 py-2 text-[16px] text-white/80 hover:text-white transition";

  return (
    <aside className="px-5 py-6">
      <h2 className="text-[18px] font-semibold text-white">
        Popular Questions
      </h2>

      <div className="mt-4 space-y-2">
        <Link href="/thread/1" className={qRow}>
          <BsFillQuestionCircleFill className={qIcon} />
          <span className="line-clamp-2">
            this is question 1 Lorem ipsum dolor sit amet consectetur...
          </span>
        </Link>

        <Link href="/thread/2" className={qRow}>
          <BsFillQuestionCircleFill className={qIcon} />
          <span className="line-clamp-2">
            this is question 1 Lorem ipsum dolor sit amet consectetur...
          </span>
        </Link>

        <Link href="/thread/3" className={qRow}>
          <BsFillQuestionCircleFill className={qIcon} />
          <span className="line-clamp-2">
            this is question 1 Lorem ipsum dolor sit amet consectetur...
          </span>
        </Link>

        <Link href="/thread/4" className={qRow}>
          <BsFillQuestionCircleFill className={qIcon} />
          <span className="line-clamp-2">
            this is question 1 Lorem ipsum dolor sit amet consectetur...
          </span>
        </Link>
      </div>

      <h2 className="mt-7 text-[18px] font-semibold text-white">
        Popular Tags
      </h2>

      <div className="mt-3">
        <Link href="/tags/react" className={tagRow}>
          <FaReact className="text-[#61DAFB]" />
          <span>React</span>
        </Link>

        <Link href="/tags/vue" className={tagRow}>
          <FaVuejs className="text-[#42B883]" />
          <span>Vue</span>
        </Link>

        <Link href="/tags/laravel" className={tagRow}>
          <FaLaravel className="text-[#FF2D20]" />
          <span>Laravel</span>
        </Link>

        <Link href="/tags/python" className={tagRow}>
          <FaPython className="text-[#3776AB]" />
          <span>Python</span>
        </Link>

        <Link href="/tags/nodejs" className={tagRow}>
          <FaNodeJs className="text-[#3C873A]" />
          <span>Node.js</span>
        </Link>
      </div>
    </aside>
  );
}

export default RightSideBar;
