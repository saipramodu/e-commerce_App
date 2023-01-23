import Head from 'next/head';
import Link from 'next/link';
import { data } from '../utils/data';

//Note the different way the page is setup
// Children are the items inside Layout function call in index page
export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' Amazona' : 'Amazona'}</title>
        <meta name='Amazona site' content='E-commerce site' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <header>
          {/* We need the nav bar now */}
          <nav className='flex flex-row h-12 justify-between items-center shadow-md p-4'>
            <Link href='/' className='text-lg font-bold'>
              Amazona
            </Link>
            <div className='flex space-x-5'>
              <Link href='/cart'>Cart</Link>
              <Link href='/login'>Login</Link>
            </div>
          </nav>
        </header>
        <div className='container m-auto mt-4 px-4'>{children}</div>
        <footer className='flex h-10 justify-center items-center shadow-inner text-xs'>
          Copyright © 2022 Amazona
        </footer>
      </div>
    </>
  );
}
