import React from 'react';
import { useRouter } from 'next/navigation'

import { Parent, Child} from '@/sylesheets/styles'
import Img from './Image';

export default function Cards({ iTunesData}: { iTunesData: any}) {
  const router = useRouter()

    return (
      <Parent >
        {iTunesData?.map((img: any, i: number) => (
            <>
          <Child key={i} onClick={() => router.push(img?.link?.attributes?.href)}>
              <h2>{img?.title?.label}</h2>
              <Img 
              src = {img['im:image'][2]?.label}
              />
              <figcaption>{`Release Date: ${img['im:releaseDate']?.attributes?.label}`}</figcaption>
              <figcaption>{`Artist: ${img['im:artist']?.label}`}</figcaption>
              <figcaption>{`Category: ${img.category?.attributes?.label}`}</figcaption>
              <figcaption>{`Price: ${img['im:price']?.label}`}</figcaption>
              </Child>
              </>
        ))}
        </Parent>
  );
}
