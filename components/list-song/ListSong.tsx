import { transcode } from 'buffer';
import Image from 'next/image';

import { FaPlay } from 'react-icons/fa6';

export default function ListSong() {
  const truncate = (desc: string) => {
    return desc?.length > 1 ? desc.slice(0, 1 - 25) + '...' : desc;
  };

  return (
    <div className='bg-neutral-50/5 group w-44 h-auto rounded-md p-3 hover:bg-neutral-100/15'>
      <figure className=' relative'>
        <Image
          src='/song.jpeg'
          alt='Song'
          width={100}
          height={100}
          className='w-full h-44 rounded-md'
        />

        <figcaption className=''>
          <Image
            src='/logo.png'
            alt='Logo'
            width={35}
            height={35}
            className='absolute top-0 left-0 p-2 rounded-full'
          />
          <FaPlay
            size={40}
            className='absolute p-2 text-black group-hover:block bg-emerald-500 group-hover:m-3 hidden rounded-full right-0 bottom-0 transition duration-200'
          />
        </figcaption>
      </figure>

      <div className='mt-3'>
        <h4 className='text-base font-bold text-white'>{`Gun's n Roses`}</h4>
        <p className='text-xs font-semibold'>
          {truncate(
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eaque?'
          )}
        </p>
      </div>
    </div>
  );
}
