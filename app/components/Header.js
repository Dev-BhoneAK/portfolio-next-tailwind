import {
  BsFillBootstrapFill,
  BsTypeBold,
  BsFillMoonStarsFill,
} from "react-icons/bs";

export default function Header() {
  return (
    <header>
      <nav className="mt-8 flex items-center justify-between lg:mt-12">
        <BsFillBootstrapFill className="cursor-pointer text-3xl text-white" />
        <BsFillMoonStarsFill className="cursor-pointer text-2xl text-white" />
      </nav>
    </header>
  );
}
