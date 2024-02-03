'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { FiPlus } from 'react-icons/fi';
import { IoIosAlbums } from 'react-icons/io';
import { TfiWorld } from 'react-icons/tfi';

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const routers = useMemo(
    () => [
      { title: 'Home', icon: HiHome, path: '/', active: pathname === '/' },
      {
        title: 'Search',
        icon: BiSearch,
        path: '/search',
        active: pathname === '/search',
      },
    ],
    [pathname]
  );

  return (
    <aside className='fixed flex w-full h-[calc(100vh-4rem)]'>
      <section className='hidden sm:flex flex-col justify-between w-[25rem] p-7'>
        <section className='space-y-4'>
          <figure>
            <Image src='/spotify.png' alt='Spotify' width={80} height={80} />
          </figure>

          <ul className='pb-8'>
            <li className='space-y-4'>
              {routers.map(({ title, icon: Icon, path, active }) => (
                <Link
                  key={title}
                  href={path}
                  className={`flex items-center hover:text-white gap-x-4 text-base font-semibold transition-colors ${
                    active && 'text-white'
                  }`}
                >
                  <Icon size={30} />
                  <span>{title}</span>
                </Link>
              ))}{' '}
            </li>
          </ul>

          <div className='text-lg font-semibold'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-x-3 hover:text-white'>
                <IoIosAlbums size={30} />
                <span>Your library</span>
              </div>

              <button className='hover:text-white'>
                <FiPlus size={25} />
              </button>
            </div>
          </div>

          <div className='overflow-y-scroll space-y-5'>
            <section className='bg-neutral-100/20 p-5 rounded-md max-w-sm'>
              <h4 className='text-base font-bold text-white'>
                Create your first playlist
              </h4>
              <p className='text- pt-2'>{`It's easy, we'll help you`}</p>
              <button className='text-sm mt-4 text-black font-bold bg-white w-fit py-2 px-3 rounded-full hover:scale-105 transition-transform'>
                Create playlist
              </button>
            </section>

            <section className='bg-neutral-100/20 p-5 rounded-md'>
              <h4 className='text-base font-bold text-white'>
                {`Let's find some podcasts to follow`}
              </h4>
              <p className='text-sm pt-2'>{`we'll keep your updated on new episodes`}</p>
              <button className='text-sm mt-4 text-black font-bold bg-white w-fit py-2 px-3 rounded-full hover:scale-105 transition-transform'>
                Browse podcasts
              </button>
            </section>
          </div>
        </section>

        <section className='text-xs space-y-3'>
          <ul className='flex items-center gap-2'>
            <li>
              <Link href='#'>Legal</Link>
            </li>
            <li>
              <Link href='#'>Privacy Policy</Link>
            </li>
            <li>
              <Link href='#'>Privacy Center</Link>
            </li>
          </ul>

          <ul className='flex items-center gap-2'>
            <li>
              <Link href='#'>Cookies</Link>
            </li>
            <li>
              <Link href='#'>About Ads</Link>
            </li>
            <li>
              <Link href='#'>Accessibility</Link>
            </li>
          </ul>

          <div className='flex flex-col gap-y-7'>
            <Link href='#' className='text-sm hover:underline transition'>
              Cookies
            </Link>

            <button className='flex items-center w-fit gap-2 text-base font-bold text-white border border-neutral-500 py-1 px-3 rounded-full transition hover:border-white hover:scale-105'>
              <TfiWorld />
              <span>English</span>
            </button>
          </div>
        </section>
      </section>
      {children}
    </aside>
  );
}
