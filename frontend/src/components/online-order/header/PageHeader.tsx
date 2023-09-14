import { PageHeaderList } from './PageHeaderList';

export function PageHeader() {
  return (
    <div className='rounded shadow-2xl p-4 md:py-10 md:col-span-2'>
      <h1 className='text-neutral-300 font-bold text-3xl lg:text-4xl text-center mb-6'>
        Flip that burger
      </h1>
      <PageHeaderList />
    </div>
  );
}
