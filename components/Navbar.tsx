import Image from "next/image";
import SearchInput from "./SearchInput";

function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-6">
      <div className="flex items-center justify-center space-x-4 ">
        <Image
          src="/logo.png"
          width={60}
          height={60}
          alt="logo"
          className="rounded-full"
        />
        <h1 className="font-bold">
          Tempest <span className="text-[#003555]">Forum</span>
        </h1>
      </div>
      <div className="w-[600px]">
        <SearchInput />
      </div>
      <div>
        <Image
          src="/profile.png"
          width={60}
          height={60}
          alt="logo"
          className="rounded-full"
        />
      </div>
    </nav>
  );
}

export default Navbar;
