export default function Signup() {
  return (
    <div className='fixed h-16 bg-gradient-to-r text-white from-fuchsia-500 to-blue-500 bottom-0 w-full bg-white flex px-5 py-3 items-center justify-between'>
      <section className=''>
        <h4 className='text-sm font-bold'>Preview of Spotify</h4>
        <p className='text-base'>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </section>

      <button className='px-7 py-3 text-base font-bold text-black rounded-full bg-white hover:scale-105 transition'>
        Sign up free
      </button>
    </div>
  );
}
