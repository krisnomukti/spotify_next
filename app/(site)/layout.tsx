import Sidebar from '@/components/sidebar/Sidebar';
import Signup from '@/components/sign-up/Signup';

export default function Layout({
  children,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar>
        <main className='flex flex-col w-full'>
          {header}
          {children}
        </main>
      </Sidebar>

      <Signup />
    </div>
  );
}
