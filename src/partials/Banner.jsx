import React from 'react';
import song from '../audios/heaven.mp3';
import ReactSound from 'react-sound';

function Banner() {
  const [play, setPlay] = React.useState(false);

  return (
    <>
      <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60">
        <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
          <div className="text-slate-500 inline-flex">
            <a
              className="font-medium hover:underline text-emerald-400 flex justify-center items-center"
              role="button"
              rel="noreferrer"
              onClick={() => setPlay((p) => !p)}
            >
              <ReactSound
                className={'animate__animated animate__shakeX'}
                url={song}
                loop={true}
                volume={75}
                playStatus={play ? 'PLAYING' : 'PAUSED'}
              />
              {play ? 'Turn Off The Music' : 'Turn On The Music'}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
