// import link artifacts
import Link from 'next/link';
// import image artifacts
import Image from 'next/image';

// Thumbnail properties
type Props = {
  // Thumbnail title
  title: string;
  // Thumbnail image src
  src: string;
  // Thumbnail slug link
  slug?: string;
};

const Thumbnail = ({ title, src, slug }: Props): JSX.Element => {
  // Add the Thumbnail cover image
  const image = (
    <Image
      sizes="(max-width: 640px) 100vw, 640px"
      fill
      src={src}
      style={{ objectFit: 'cover' }}
      alt={`Thumbnail cover image ${title}`}
      className="hover:opacity-80 transition duration-200 ease-in-out"
    />
  );

  // return the Thumbnail cover image slug
  return (
    <>
      {slug ? (
        <div className="w-full h-28" style={{ position: 'relative' }}>
          <Link href={`/posts/${slug}`}>{image}</Link>
        </div>
      ) : (
        <div className="w-full h-36 relative">sadasfa{image}</div>
      )}
    </>
  );
};

// export Thumbnail module
export default Thumbnail;
