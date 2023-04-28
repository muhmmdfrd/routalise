import React from 'react';

function Banner() {
  return (
    <>
      <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60">
        <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
          <div className="text-slate-500 inline-flex">
            <a
              className="font-medium hover:underline text-emerald-400"
              href="https://cruip.com/simple/"
              target="_blank"
              rel="noreferrer"
            >
              Turn off the music
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
