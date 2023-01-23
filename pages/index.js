import Image from 'next/image';
import Layout from '@/Components/Layout';
import ProductItem from '@/Components/ProductItem';
import { data } from '../utils/data';

export default function Home() {
  const { products } = data;
  const allProducts = products.map((items) => {
    return (
      <div key={items.slug}>
        <ProductItem products={items} />
      </div>
    );
  });
  return (
    // The Homepage is built in component ProductItem and then called here
    <Layout title={'Homepage'}>
      {/* Gap is fro grid spacing */}
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {allProducts}
      </div>
    </Layout>
  );
}
