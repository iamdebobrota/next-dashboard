import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex flex-col gap-2'>
      <p>Dashboard Page</p>

      <Link className='bg-red-500 rounded-sm p-2 w-52' href="/dashboard/invoices">Go to Invoices page</Link>

      <Link className='bg-red-500 rounded-sm p-2 w-52' href="/dashboard/customers">Go to Customers page</Link>
    </div>
  );
}
