import Image from 'next/image';

export default function Img({ src }: { src: string}): JSX.Element {
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
    />
  );
}
