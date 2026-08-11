import { BlogPosts } from "@/components/posts";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row gap-2">
        <div className="">
          <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 text-black dark:text-white transition-opacity duration-600  opacity-100 ease-in ">
            Kofí Kusí Appau
          </h1>
          <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400 space-y-4">
            <p>
              I am currently a final year CS student.
            </p>
            <p>I grew up in Kumasi, Ghana.</p>
            <p>I play LinkedIn puzzle games every day.</p>
            <p className="flex items-center gap-1">
              And i am a red devil
              <span>
                <Image
                  src="manchester_united.webp"
                  alt="Manchester United"
                  width={20}
                  height={20}  
                />
              </span>
            </p>

            <p>I am broadly insterested in:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Software engineering and web development.
              </li>
              <li>Artificial intelligence and machine learning.</li>
              <li>Open source software and community building.</li>
            </ul>
            <div className="flex items-center mt-8 gap-4">
              <span>
                {" "}
                <div className="h-px w-8 bg-neutral-600 dark:text-neutral-400"></div>
              </span>{" "}
              thank you for visiting and take care!
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 rounded-2xl">
            <Image
              src="/me-monochrome.webp"
              alt="Profile picture"
              className="mb-4 w-full opacity-50 rounded-2xl"
              width={200}
              height={200}
            />
        </div>
      </div>
      <div
        className={
          "dark:text-gray-400 max-w-2xl mx-auto w-full mt-10 mb-10 transition-opacity delay-1400 duration-1000 justify-center items-center h-5 border-b-1px border-gray-400 dark:border-gray-500 text-2xl text-center "
        }
      >
        <span className="dark:bg-black px-5 position: relative -bottom-1.5 transition-colors duration-200 inline-flex items-center gap-2">
          <div>
            <span className="inline-block rotate-180 relative ">➢</span>
          </div>
          <div>✵</div>
          <div
            className=" inline-block  relative "
          >
            ➢
          </div>
        </span>
        <hr />
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controls={false}
        preload="auto"
        aria-hidden="true"
        className="w-full mb-10 pointer-events-none select-none"
      >
        <source src="/ascii-donut.webm" type="video/webm" />
        <source src="/ascii-donut.mp4" type="video/mp4" />
      </video>
      <div className="my-8">
        <div className="flex gap-2 items-center">
          <div className="w-8 h-px bg-black"></div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-black  hover:fill-gray-400  dark:fill-white  dark:hover:fill-gray-400 transition-colors duration-300"
            >
              <path
                fillRule="evenodd"
                d="M3.75 4.5a.75.75 0 01.75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75C18 11.708 12.292 6 5.25 6H4.5a.75.75 0 01-.75-.75V4.5zm0 6.75a.75.75 0 01.75-.75h.75a8.25 8.25 0 018.25 8.25v.75a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75v-.75a6 6 0 00-6-6H4.5a.75.75 0 01-.75-.75v-.75zm0 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <BlogPosts />
      </div>
    </section>
  );
}
