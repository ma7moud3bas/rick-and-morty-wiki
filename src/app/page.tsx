import Button from "@UI/button"
import Text from "@UI/text"
import Image from "next/image"
export default function Home() {
  return (
    <section className="container h-hero px-8 mx-auto grid lg:grid-cols-2 gap-x-32 pt-16 md:pt-20">
      <div className="w-full flex items-start justify-center flex-col lg:pb-20 gap-y-6">
        <Text as="h1" variant="header/bold" >
          Explore the Universe of Rick and Morty!
        </Text>
        <Text as="p" variant="large/normal" >
          Learn More About Your Favorite Interdimensional Adventurers
        </Text>
        <div>
          <Button href="/characters"> See Characters</Button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center lg:pb-20">
        <Image src="/assets/images/rick-and-morty-portal.png" width="600" height="600" alt="rick and morty hero image" />
      </div>
    </section>
  )
}
