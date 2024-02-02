import Footer from '@/components/footer/Footer';
import Sidebar from '@/components/sidebar/Sidebar';

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

      <Footer />
    </div>
  );
}
