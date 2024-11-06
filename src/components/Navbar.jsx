import {ArrowUpRight, Menu} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";
import {Button} from "./ui/button";

export default function Navbar() {
  return (
    <header className="w-[79.5%] max-sm:w-[92%] max-xl:w-[95%] mx-auto bg-[#635BFF29] px-4 py-6 rounded-xl">
      <nav className="mx-auto flex  items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="" className=" max-sm:w-[150px]" />
        </Link>
        <div>
          <Menu className="xl:hidden cursor-pointer" />
        </div>
        <div className="flex items-center gap-8 max-xl:hidden ">
          <Link
            href="/disaster"
            className="text-[20px] font-bold text-[#6B5EFF]"
          >
            Disaster
          </Link>
          <Link
            href="/organization"
            className="text-[20px] font-medium text-black hover:text-[#6B5EFF]"
          >
            Organization
          </Link>
          <Link
            href="/about"
            className="text-[20px] font-medium text-black hover:text-[#6B5EFF]"
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="text-[20px] font-medium text-black hover:text-[#6B5EFF]"
          >
            Blog
          </Link>
          <Button className="bg-[#0A0A0A] text-[20px] text-white hover:bg-[#2D2D2D]">
            <Link href="/contact" className="flex items-center gap-2">
              Contact Us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
