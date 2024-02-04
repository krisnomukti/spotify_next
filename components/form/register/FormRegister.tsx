import Link from 'next/link';

export default function FormRegister() {
  return (
    <form className='flex flex-col gap-y-5 px-2 mt-16'>
      <div className='flex flex-col w-full space-y-2'>
        <label htmlFor='' className='text-base text-start font-bold text-white'>
          Email address
        </label>
        <input
          type='text'
          placeholder='name@domain.com'
          className='rounded-md bg-transparent border p-2 hover:border-white focus:border-2 focus:border-white border-neutral-400'
        />
      </div>

      <Link href='' className='text-sm text-green-500 underline'>
        Use phone number instead.
      </Link>

      <div className='w-full text-center'>
        <button className='bg-green-500 mb-8 rounded-full hover:brightness-105 transition w-full py-3 text-base text-black font-bold text-center'>
          Next
        </button>
      </div>
    </form>
  );
}
