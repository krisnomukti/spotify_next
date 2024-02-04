import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className='px-16 py-8'>
        <Image
          src='/spotify.png'
          alt='Spotify'
          width={500}
          height={500}
          className='w-32 h-auto'
        />
      </header>
      <main>{children}</main>;
    </>
  );
}
