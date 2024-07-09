import { ImHeart } from "react-icons/im";
import { FiGithub, FiTwitter, FiMail, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <section className="pb-4 space-y-4 flex flex-col  items-center justify-center  md:space-y-0 md:flex-row-reverse md:justify-around">
      <div>
        <ul className="flex items-center space-x-5">
          <li>
            <a href="mailto:bhoneak@outlook.com" aria-label="Mail">
              <FiMail className="cursor-pointer text-xl text-pink-600 hover:text-2xl" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/dev-bhoneak" aria-label="Linkedin">
              <FiLinkedin className="cursor-pointer text-xl text-pink-600 hover:-translate-y-1" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Dev-BhoneAK" aria-label="Github">
              <FiGithub className="cursor-pointer text-xl text-pink-600 hover:rotate-12" />
            </a>
          </li>
          <li>
            <a href="https://x.com/bhone_ak" aria-label="Twitter">
              <FiTwitter className="cursor-pointer text-xl text-pink-600 hover:-rotate-12" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h6 className="flex items-center justify-center capitalize">
          Made with
          <span className="mx-1">
            <ImHeart className="text-pink-600 text-lg" />
          </span>
          by BAK
        </h6>
      </div>
    </section>
  );
}
