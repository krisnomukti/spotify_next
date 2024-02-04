import Link from 'next/link';

export default function LoginPage() {
  return (
    <form className='flex flex-col gap-y-5 px-2 mt-16'>
      <div className='flex flex-col w-full space-y-2'>
        <label htmlFor='' className='text-base text-start font-bold text-white'>
          Email or username
        </label>
        <input
          type='text'
          placeholder='Email or username'
          className='rounded-md bg-transparent border p-2 hover:border-white focus:border-2 focus:border-white border-neutral-400'
        />
      </div>

      <div className='flex flex-col w-full space-y-2'>
        <label htmlFor='' className='text-base text-start font-bold text-white'>
          Password
        </label>
        <input
          type='password'
          placeholder='Password'
          className='rounded-md bg-transparent border p-2 hover:border-white focus:border-2 focus:border-white border-neutral-400'
        />
      </div>

      <div className='w-full text-center mt-14'>
        <button className='bg-green-500 mb-8 rounded-full hover:scale-105 transition w-full py-3 text-base text-black font-bold text-center'>
          Log In
        </button>

        <Link
          href=''
          className='text-white text-base hover:text-green-500 underline transition'
        >
          Forget password
        </Link>

        <p className='text-base mt-16'>
          Don't have an account?{' '}
          <Link
            href='/auth/register'
            className='underline text-white hover:text-green-500'
          >
            Sign up for Spotify
          </Link>
        </p>
      </div>
    </form>
  );
}
