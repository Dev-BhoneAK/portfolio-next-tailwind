import Image from "next/image";
import {
  BsFillBootstrapFill,
  BsTypeBold,
  BsFillMoonStarsFill,
} from "react-icons/bs";

export default function Home() {
  return (
    <>
      <header>
        <nav className="mt-8 flex items-center justify-between lg:mt-12">
          <BsFillBootstrapFill className="cursor-pointer text-3xl text-white" />
          <BsFillMoonStarsFill className="cursor-pointer text-2xl text-white" />
        </nav>
      </header>
      <main className="container mx-auto min-h-screen"></main>
      <footer></footer>
    </>
  );
}
