import { NextSeo } from "next-seo";

export default function Head() {
  return (
    <>
      <NextSeo
        useAppDir={true}
        title="Rick and Morty Wiki"
        description="All info about the TV show Rick and Morty"
        canonical={"https://rick-n-morty-wiki.vercel.app"}
        openGraph={
          {
            title: "Rick and Morty Wiki",
            description: "Get all the information about the TV show Rick and Morty",
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
