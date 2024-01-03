import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center '>
      <div className="flex items-center justify-center gap-3 text-center font-semibold ">
        <h1 className="inline-block text-5xl text-red-500">404 | </h1>
        <h1 className="inline-block text-4xl"> Page Not Found</h1>
      </div>

      <div className='mt-4'>
        <button className='flex items-center transition-all animate-bounce gap-1 w-[] hover:w-full  bg-red-500 px-2 py-2 text-white rounded-sm'>
        <ArrowLeftIcon className='h-4 w-4'/>
        <Link href="/">Back To Home</Link>
        </button>
        
      </div>
    </div>
  );
}
