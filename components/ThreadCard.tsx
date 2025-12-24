import { AiFillLike } from "react-icons/ai";
import { MdQuestionAnswer } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import TagCard from "./TagCard";

function ThreadCard() {
  return (
    <article
      className={[
        "group rounded-2xl border border-white/10 bg-card p-5 shadow-sm transition",
        "hover:border-main/30 hover:bg-card/90",
        "focus-within:ring-2 focus-within:ring-main/30",
        "sm:p-6",
      ].join(" ")}
    >
      <h2 className="text-lg font-semibold leading-snug text-white sm:text-xl">
        <Link
          href="/thread/1"
          className="outline-none focus-visible:ring-2 focus-visible:ring-main/40 rounded-md"
        >
          What is TypeScript?
        </Link>
      </h2>

      <div className="mt-3 flex flex-wrap gap-2">
        <TagCard href="/?filter=TypeScript">TypeScript</TagCard>
        <TagCard href="/?filter=Vue">Vue</TagCard>
      </div>

      <div className="mt-5 flex flex-col gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/10 bg-tertiary">
            <Image
              src="/profile.png"
              alt="profile"
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>

          <div className="text-sm text-white/70">
            <span className="font-medium text-white/90">Shein Minn Oo</span>
            <span className="mx-2 text-white/30">•</span>
            <span className="text-white/60">asked 2 minutes ago</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-secondary/60 px-3 py-1.5 transition hover:border-main/30">
            <AiFillLike className="text-white/80" />
            <span className="tabular-nums text-white/90">1.2k</span>
            <span className="text-white/55">likes</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-secondary/60 px-3 py-1.5 transition hover:border-main/30">
            <MdQuestionAnswer className="text-white/80" />
            <span className="tabular-nums text-white/90">1k</span>
            <span className="text-white/55">answers</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-secondary/60 px-3 py-1.5 transition hover:border-main/30">
            <FaEye className="text-white/80" />
            <span className="tabular-nums text-white/90">1.2k</span>
            <span className="text-white/55">views</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ThreadCard;
