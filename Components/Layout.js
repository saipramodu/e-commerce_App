import Head from 'next/head';
import Link from 'next/link';

//Note the different way the page is setup
// Children are the items inside Layout function call in index page
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Amazon clone shopping site</title>
        <meta name='Amazona site' content='E commerce site' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex min-h-screen flex-col justify-between p-4'>
        <header>
          {/* We need the nav bar now */}
          <nav className='flex flex-row justify-between'>
            <Link href='/'>Amazona</Link>
            <div className='flex space-x-5'>
              <Link href='/cart'>Cart</Link>
              <Link href='/login'>Login</Link>
            </div>
          </nav>
        </header>
        <div>{children}</div>
        <footer>Footer</footer>
      </div>
    </>
  );
}
