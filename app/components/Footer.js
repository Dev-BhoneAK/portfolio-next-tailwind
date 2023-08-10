import { motion } from "framer-motion";
import { ImHeart } from "react-icons/im";
import { FiGithub, FiTwitter, FiInstagram, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <section className="pb-4 space-y-4 flex flex-col  items-center justify-center  md:space-y-0 md:flex-row-reverse md:justify-around">
      <div>
        <ul className="flex items-center space-x-5">
          <li>
            <a href="https://github.com/Dev-BhoneAK" aria-label="Mail">
              <FiMail className="cursor-pointer text-xl text-pink-600" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Dev-BhoneAK" aria-label="Github">
              <FiGithub className="cursor-pointer text-xl text-pink-600" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Dev-BhoneAK" aria-label="Twitter">
              <FiTwitter className="cursor-pointer text-xl text-pink-600" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Dev-BhoneAK" aria-label="Instagram">
              <FiInstagram className="cursor-pointer text-xl text-pink-600" />
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
