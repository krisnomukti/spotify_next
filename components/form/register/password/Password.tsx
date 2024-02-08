'use client';

export default function PasswordPage() {
  return (
    <form>
      <div className='flex gap-y-2 flex-col'>
        <label htmlFor='' className='text-sm text-start font-bold text-white'>
          Password
        </label>
        <input
          type='password'
          placeholder=''
          className='rounded-md bg-transparent border p-2 hover:border-white focus:border-2 focus:border-white border-neutral-400'
        />
      </div>

      <div>
        <p className='text-sm font-bold text-white mt-5'>
          Your password must contain at least
        </p>

        <ul className='text-sm text-white leading-7'>
          <li className='flex items-center gap-x-2'>
            <span className='p-1 rounded-full border border-neutral-300' />1
            letter
          </li>
          <li className='flex items-center gap-x-2'>
            <span className='p-1 rounded-full border border-neutral-300' />1 1
            number or special character (example: # ? ! &)
          </li>
          <li className='flex items-center gap-x-2'>
            <span className='p-1 rounded-full border border-neutral-300' />1 10
            characters
          </li>
        </ul>

        <button className='bg-green-500 mb-24 mt-7 rounded-full hover:brightness-105 transition w-full py-3 text-base text-black font-bold text-center'>
          Next
        </button>
      </div>
    </form>
  );
}
