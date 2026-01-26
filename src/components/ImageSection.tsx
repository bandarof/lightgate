import Image from "next/image";

type Props = {
  src: string;
};

export default function ImageSection({ src }: Props) {
  return (
    <div className="w-full relative">
      <Image
        src={src}
        alt=""
        width={1600}
        height={900}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  );
}
