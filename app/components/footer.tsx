import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  FileIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div
        className={
          "dark:text-gray-400 max-w-2xl mx-auto w-full mt-10 mb-10 transition-opacity delay-1400 duration-1000 flexjustify-center items-center h-5 border-b-1px border-gray-400 dark:border-gray-500 text-2xl text-center "
        }
      >
        <span className="dark:bg-black px-5 position: relative -bottom-1.5 transition-colors duration-200 inline-flex items-center gap-2">
          <span className="inline-block rotate-180 relative ">➢</span>
          <div>✵</div>
          <div className=" inline-block  relative ">➢</div>
        </span>
        <hr />
      </div>
      <div className="mb-2 flex justify-between">
        <ul className="flex flex-col justify-between gap-6">
          <li>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <FileIcon className="inline-block size-5" />
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/kofi-kusi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <GitHubLogoIcon className="inline-block size-5" />
              GitHub
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col justify-between gap-6">
          <li>
            <Link
              href="https://www.linkedin.com/in/kofi-kusi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:hover:underline"
            >
              <LinkedInLogoIcon className="inline-block size-5" />
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/kmeanskusi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:hover:underline"
            >
              <TwitterLogoIcon className="inline-block size-5" />
              Twitter
            </Link>
          </li>
        </ul>
        <p className="text-neutral-600 dark:text-neutral-300">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
