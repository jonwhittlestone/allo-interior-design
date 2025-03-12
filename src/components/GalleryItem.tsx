import Image from "next/image";

interface GalleryItemProps {
  imageSrc: string;
  altText: string;
}

export default function GalleryItem({ imageSrc, altText }: GalleryItemProps) {
  return (
    <div className="gallery-item">
      <Image
        src={imageSrc}
        alt={altText}
        width={400}
        height={300}
        className="gallery-image"
      />
    </div>
  );
}
