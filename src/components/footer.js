import React from "react";

export const Footer = () => {
  return (
    <footer className="text-sm text-center border-t border-gray-600 shadow-md lg:text-md ">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="font-medium text-white ">
            Coded with <img className="inline w-4 m-0 mr-1" src="/heart.svg" alt="Heart Icon" />
            by <span className="font-bold text-orange-500 ">Sercan Yektas</span> and built with
            <a href="https://nextjs.org/">
              <img
                className="inline w-12 h-12 m-0 ml-2 text-white"
                src="/nextjs.svg"
                alt="NextJs Icon"
              />
            </a>
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com/syektas"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="inline w-6 h-6 text-blue-500 fill-current hover:text-blue-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Twitter</title>
                <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
              </svg>
            </a>

            <a
              href="https://github.com/yektas"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
              className="inline w-6 h-6 text-gray-100 fill-current hover:text-gray-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>GitHub</title>
                <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/sercanyektas/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline w-6 h-6 text-white rounded-sm fill-current hover:text-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
