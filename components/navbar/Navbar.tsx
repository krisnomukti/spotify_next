'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiSearchLine } from 'react-icons/ri';

export default function Navbar() {
  const pathname = usePathname();

  const routers = useMemo(
    () => [
      { title: 'Premium', path: '/premium', active: pathname === '/premium' },
      {
        title: 'Suport',
        path: '/suport',
        active: pathname === '/suport',
      },
      {
        title: 'Download',
        path: '/download',
        active: pathname === '/download',
      },
    ],
    [pathname]
  );

  const iconButton = [
    { id: '2', icon: IoIosArrowBack },
    { id: '1', icon: IoIosArrowForward },
  ];

  return (
    <nav className='w-full px-5 py-3'>
      <div className='flex justify-between items-center'>
        <section>
          {iconButton.map(({ id, icon: Icon }) => (
            <button
              key={id}
              className='rounded-full hover:bg-neutral-800 p-1 transition'
            >
              <Icon size={20} />
            </button>
          ))}
        </section>

        <section
          className={`relative group px-3 flex items-center bg-neutral-800 rounded-full ${
            pathname !== '/search' && 'hidden'
          }`}
        >
          <RiSearchLine className='absolute' />
          <input
            type='text'
            placeholder='What do you listen to?'
            className='bg-transparent py-3 ml-5 border-none outline-none text-white group-focus-within:border-white'
          />
        </section>

        <section className='flex items-center gap-x-5 text-lg font-semibold'>
          <ul className='flex items-center gap-x-2 mr-3'>
            {routers.map(({ title, path, active }) => (
              <li
                key={title}
                className='hover:text-white tracking-widest hover:scale-105 transition'
              >
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>

          <div className='w-[1px] h-5 bg-neutral-400' />

          <ul className='flex items-center gap-x-5 ml-3'>
            <li className='hover:text-white hover:scale-105 transition'>
              <Link href='/auth/register'>Sign up</Link>
            </li>

            <li className='px-7 py-3 bg-white rounded-full text-black transition hover:scale-105'>
              <Link href='/auth/login'>Log in</Link>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
}
