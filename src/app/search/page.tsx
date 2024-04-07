import SearchContent from '@/components/search/SearchContent';
import React, { Suspense } from 'react';


export default function SearchPage() {

  return (
    // <>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchContent />
      </Suspense>
    // </>
  );
}
