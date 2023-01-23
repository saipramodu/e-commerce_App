import Link from 'next/link';
import Image from 'next/image';

export default function ProductItem({ products }) {
  //Note that products is the prop passed here

  return (
    <div className='flex flex-col shadow-md rounded-xl'>
      <Link href={`/products/${products.slug}`}>
        <img
          src={products.image}
          alt={products.name}
          className='shadow rounded-md h-50 w-45'
        />
      </Link>
      <div className='flex items-center justify-center flex-col p-3 pb-5 rounded-b-md'>
        <h3>{products.name}</h3>
        <p className='text-xs p-1'>{products.brand}</p>
        <p className='text-sm p-1'>${products.price}</p>
        <button
          className='bg-yellow-400 px-3 w-auto h-8 rounded-md shadow-sm text-xs hover:bg-yellow-300
         active:bg-yellow-500'
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
