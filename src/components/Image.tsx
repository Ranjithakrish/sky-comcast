import Image from 'next/image';

export default function Img({ src, width, height }: { src: string, width: number, height: number }): JSX.Element {
  const myLoader = ({ src }: { src: string }) => {
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
      width={width}
      height={height}
      alt="Picture of the author"
    />
  );
}
