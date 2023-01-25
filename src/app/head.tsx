import { NextSeo } from "next-seo";

export default function Head() {
  return (
    <>
      <NextSeo
        useAppDir={true}
        title="Rick and Morty Wiki"
        description="Explore the Universe of Rick and Morty!"
        canonical={"https://rick-n-morty-wiki.vercel.app"}
        openGraph={
          {
            title: "Rick and Morty Wiki",
            description: "Explore the Universe of Rick and Morty!",
            url: "https://rick-n-morty-wiki.vercel.app/",
            images: [
              {
                url: "/OGImage.webp"
              }
            ]
          }
        }
      />
    </>
  )
}
