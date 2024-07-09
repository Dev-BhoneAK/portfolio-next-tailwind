import React from "react";
import { FiLink } from "react-icons/fi";

function ProjectLink({ projectLinks }) {
  return (
    <ul className="mt-2 flex flex-wrap" aria-label="Project Links">
      {projectLinks.map((projectLink, index) => (
        <li key={index} className="mr-4">
          <a
            class="relative mt-2 inline-flex items-center text-md font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
            href={projectLink.address}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="MusicKit.js (opens in a new tab)"
          >x
            <FiLink className="cursor-pointer text-sm text-pink-600" />
            <span>{projectLink.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ProjectLink;
