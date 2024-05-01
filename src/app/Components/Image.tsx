import Image from 'next/image';
import { useRouter } from 'next/navigation'

export default function Img({ src, link }: { src: string, link: string}): JSX.Element {
  const router = useRouter()
  const myLoader=({src}: { src: string })=>{
    return src;
  }
  const imageStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  return (
    <Image
      loader={myLoader}
      style={imageStyle}
      src={src}
      width={100}
      height={100}
      alt="Picture of the author"
      onClick={() => router.push(link)}
    />
  );
}
