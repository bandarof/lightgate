import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Lightgate - Redefining Cultural Entertainment Worldwide",
  description: "Discover Lightgate's mission to revolutionize cultural entertainment through innovative technology, global scale, and immersive festive event experiences.",
  keywords: "Lightgate, cultural entertainment, event technology, festival innovation, global events, immersive experiences",
  openGraph: {
    title: "About Lightgate - Illuminating the World Through Culture",
    description: "A global phenomenon redefining entertainment through groundbreaking technology and never-before-seen festive event concepts.",
    type: "website",
    images: ["/about-og.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lightgate - Redefining Cultural Entertainment",
    description: "Discover our journey, team, and vision for global cultural innovation.",
    images: ["/about-twitter.jpg"]
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
