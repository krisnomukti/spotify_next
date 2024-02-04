'use client';

import Link from 'next/link';

import FormRegister from '@/components/form/register/FormRegister';

import { DiApple } from 'react-icons/di';

export default function Register() {
  return (
    <div className='w-full'>
      <section className='flex justify-center'>
        <div className='flex flex-col justify-center w-4/5 mx-auto bg-black rounded-md mt-10'>
          <div className='mx-auto w-96 flex flex-col items-center'>
            <div className='w-[324px]'>
              <h2 className='text-[2.6rem] leading-10 font-bold mb-14 text-white'>
                Sign up to start listening
              </h2>

              <section>
                <FormRegister />
              </section>

              <div className='relative w-full flex items-center justify-center h-[1px] bg-white/50 mt-2'>
                <span className='absolute bg-black px-2 text-base text-white'>
                  or
                </span>
              </div>

              <ul className='space-y-2 px-2 mt-10'>
                <li>
                  <button className='flex text-white/85 font-bold w-full items-center gap-x-6 border border-white/60 px-10 py-2 rounded-full hover:border-white'>
                    <DiApple size={25} />
                    <span className='text-lg'>Continue with Apple</span>
                  </button>
                </li>

                <li>
                  <button className='flex text-white/85 font-bold w-full items-center gap-x-6 border border-white/60 px-10 py-2 rounded-full hover:border-white'>
                    <DiApple size={25} />
                    <span className='text-lg'>Continue with Apple</span>
                  </button>
                </li>

                <li>
                  <button className='flex text-white/85 font-bold w-full items-center gap-x-6 border border-white/60 px-10 py-2 rounded-full hover:border-white'>
                    <DiApple size={25} />
                    <span className='text-lg'>Continue with Apple</span>
                  </button>
                </li>
              </ul>
            </div>

            <div className='mt-16 pb-5 space-y-7 text-center'>
              <p className='text-base'>
                <span>Already have an account?</span>{' '}
                <Link href='/auth/login' className='underline text-white'>
                  Log in here.
                </Link>
              </p>

              <p className='text-xs px-12'>
                This site is protected by reCAPTCHA and the Google{' '}
                <Link href='' className='underline'>
                  Privacy Policy
                </Link>
                and{' '}
                <Link href='' className='underline'>
                  Terms of Service
                </Link>{' '}
                apply.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
