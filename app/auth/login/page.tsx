import LoginPage from '@/components/form/login/LoginPage';

import Link from 'next/link';

import { DiApple } from 'react-icons/di';

export default function Login() {
  return (
    <div className='w-full text-center'>
      <section className='bg-gradient-to-b flex justify-center from-neutral-500/40 to-black'>
        <div className='flex flex-col justify-center w-4/5 mx-auto bg-black rounded-md mt-10'>
          <div className='mx-auto w-96 py-14 flex flex-col items-center'>
            <div className='w-[324px]'>
              <h2 className='text-[2.6rem] font-bold text-center mb-14 text-white'>
                Log in to Spotify
              </h2>

              <ul className='space-y-2 px-2'>
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

                <li>
                  <button className='flex justify-center text-white/85 font-bold w-full items-center border border-white/60 py-2 rounded-full hover:border-white'>
                    <span className='text-lg'>Continue with phone number</span>
                  </button>
                </li>
              </ul>

              <section>
                <LoginPage />
              </section>
            </div>
          </div>
        </div>
      </section>

      <p className='text-xs pb-5'>
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
  );
}
