import React from "react";

const Error = () => {
  return (
    <div>
      <section className="flex items-center   h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
