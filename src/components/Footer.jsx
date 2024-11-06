import Link from "next/link";
import {Button} from "./ui/button";
import {Input} from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-[#03071E]  py-12 mx-auto text-white">
      <div className="mx-auto  px-4 container grid  gap-12 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <span className="bg-gradient-to-r from-[#6B5EFF] to-[#8B7FFF] bg-clip-text text-transparent">
              Planet
            </span>
            <span>Restore</span>
          </Link>
          <p className="mt-4 text-gray-400">
            Keeping you informed on weather, natural disasters, and emergency
            alerts. Our mission is to provide timely and accurate information to
            help communities stay safe. From storm warnings to earthquake
            updates, we bring unmatched insights to navigate nature&apos;s
            challenges with confidence.
          </p>
        </div>
        <div className="md:ml-24">
          <h3 className="mb-4 font-semibold">Useful Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/disaster">Disaster</Link>
            </li>
            <li>
              <Link href="/relief">Relief</Link>
            </li>
            <li>
              <Link href="/organization">Organization</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">Contact Us</h3>
          <address className="not-italic text-gray-400">
            <p>Mirpur 10, Dhaka, Bangladesh</p>
            <p className="mt-2">+88 01755657842</p>
            <p className="mt-2">planetrestore@gmail.com</p>
          </address>
        </div>
        <div>
          <h3 className="mb-4 font-semibold">Subscribe</h3>
          <p className="mb-4 text-gray-400">
            Subscribe our site and get update to all the post we included
          </p>
          <form className="xl:flex gap-2">
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-white/10 "
            />
            <Button className="bg-[#6B5EFF] hover:bg-[#5B4EEF] max-sm:mt-5">
              Subscribe Now
            </Button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl text-center text-sm text-gray-400">
        <p>© 2024 - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
