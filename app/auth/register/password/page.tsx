import { IoIosArrowBack } from 'react-icons/io';

import PasswordPage from '@/components/form/register/password/Password';
import Link from 'next/link';

export default function Password() {
  return (
    <div className='w-full'>
      <section className='flex justify-center'>
        <div className='flex flex-col justify-center w-4/5 mx-auto bg-black rounded-md'>
          <div className='mx-auto w-[26rem] flex flex-col items-center'>
            <div className='w-full'>
              <div className='w-full h-[1px] bg-neutral-400 rounded-full' />

              <section className='flex flex-col gap-y-3 mt-2'>
                <div className='flex items-center gap-x-3'>
                  <button className='hover:text-white'>
                    <IoIosArrowBack size={30} />
                  </button>

                  <div>
                    <p>Step 1 of 3</p>
                    <h4 className='text-base font-bold text-white'>
                      Create a password
                    </h4>
                  </div>
                </div>

                <section className='px-10'>
                  <PasswordPage />

                  <p className='text-xs px-2 text-center'>
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
                </section>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
