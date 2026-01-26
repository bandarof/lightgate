export default function ImageSection({ src }: { src: string }) {
  return (
    <section className="image-section">
      <img src={src} />
    </section>
  );
}
