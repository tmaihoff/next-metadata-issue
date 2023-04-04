'use client'

import { useSearchParams } from 'next/navigation';

export default function ClientComponent() {
  // Search params breaks static generation of <meta> tags 
  // 1. run `npm run build`
  // 2. Check .next/server/app/index.html
  // 3. see that static generation of <meta> tags does not work. <meta> tags are included in the script self.__next_f.push
  // 4. Uncomment searchParams
  // 5. run `npm run build`
  // 6. Check .next/server/app/index.html 
  // 7. see that static generation of <meta> tags works
  const searchParams = useSearchParams();

  return (
    <div>
      <h1>ClientComponent </h1>
      <p>searchParams: {searchParams.toString()}</p>
    </div>
  )
}
