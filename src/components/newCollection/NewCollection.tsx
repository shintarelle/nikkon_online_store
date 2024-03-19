import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

//тут будет ссылка на страницу новой коллекции

function NewCollection() {
  return (
    <div className="max-w-[1240px] mt-0 mb-10 mx-auto">
      <Link href='#'>
        <Image src='/newCollection.jpeg' alt='link' width={100} height={100} className='w-full h-300'   ></Image>
      </Link>
    </div>
  )
}

export default NewCollection
