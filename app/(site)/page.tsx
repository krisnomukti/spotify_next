import Link from 'next/link';

import ListSong from '@/components/list-song/ListSong';

import { IoLogoInstagram } from 'react-icons/io5';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

export default function Home() {
  const sosials = [
    { id: '1', icon: IoLogoInstagram },
    { id: '2', icon: FaTwitter },
    { id: '3', icon: FaFacebook },
  ];

  return (
    <div className='overflow-y-scroll space-y-8 p-5 h-full w-full bg-gradient-to-b from-neutral-100/20 via-black to-black'>
      <section className='flex items-center justify-between'>
        <h3 className='text-white text-2xl font-bold'>Zzzzz</h3>
        <button className='hover:underline'>Show all</button>
      </section>

      <section className='grid grid-cols-6 mt-5 gap-3'>
        <ListSong />
        <ListSong />
        <ListSong />
        <ListSong />
        <ListSong />
        <ListSong />
      </section>

      <section className='grid grid-cols-5 pt-14'>
        <ul>
          <h4 className='text-base font-bold text-white'>Company</h4>
          <li>
            <Link href=''>About</Link>
          </li>
          <li>
            <Link href=''>Jobs</Link>
          </li>
          <li>
            <Link href=''>For the Record</Link>
          </li>
        </ul>

        <ul>
          <h4 className='text-base font-bold text-white'>Communities</h4>
          <li>
            <Link href=''>For Artist</Link>
          </li>
          <li>
            <Link href=''>Developers</Link>
          </li>
          <li>
            <Link href=''>Advertising</Link>
          </li>
          <li>
            <Link href=''>Investors</Link>
          </li>
          <li>
            <Link href=''>Vendors</Link>
          </li>
        </ul>

        <ul className='col-span-2'>
          <h4 className='text-base font-bold text-white'>Useful Links</h4>
          <li>
            <Link href=''>Support</Link>
          </li>
          <li>
            <Link href=''>Free Mobile App</Link>
          </li>
        </ul>

        <div className='flex self-start justify-evenly'>
          {sosials.map(({ id, icon: Icon }) => (
            <Link href='' key={id}>
              <Icon
                size={35}
                className='text-white rounded-full p-2 hover:bg-neutral-500 w-fit'
              />
            </Link>
          ))}
        </div>
      </section>

      <div className='w-full border-t-[1px] border-neutral-700'>
        <h5 className='mt-5'>@ Spotify 2024 AB</h5>
      </div>
    </div>
  );
}
