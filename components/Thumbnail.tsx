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
      height={300}
      width={400}
      src={src}
      alt={`Thumbnail cover image ${title}`}
      layout={'responsive'}
      objectFit={'cover'}
      className="rounded-md hover:opacity-80 transition duration-200 ease-in-out"
    />
  );

  // return the Thumbnail cover image slug
  return (
    <>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        <div style={{ width: '400px', height: '300px' }}>{image}</div>
      )}
    </>
  );
};

// export Thumbnail module
export default Thumbnail;
