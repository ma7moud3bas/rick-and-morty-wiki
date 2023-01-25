import Link from "@UI/link"
import Text from "@UI/text"
import { ComponentProps } from "react";
import Image from "next/image";

export type Props = ComponentProps<"header">

export default function Navbar(props: Props) {
    return (
        <header className={`width-full h-20 flex items-center justify-center  font-satoshi`} {...props}>
            <div className="container py-4 flex items-center justify-between h-full px-8">
                <Link href="/" className="brand flex gap-4 items-center mr-12 font-brand text-brand-green">
                    <Image width={40} height={40} alt="logo" className={"rounded-full"} src="/assets/images/logo.png" />
                    <div className="text-brand-blue font-brand [filter:drop-shadow(0_0_3px_#97CE4C)] font-bold text-3xl drop-shadow hidden md:block">
                        Rick and Morty Wiki
                    </div>
                </Link>
                <nav className="flex items-center gap-8 lg:gap-12">
                    <Link href="/characters" >
                        <Text variant={"xl/semibold"}>
                            Characters
                        </Text>
                    </Link>
                    <Link href="/episodes">
                        <Text variant={"xl/semibold"}>
                            Episodes
                        </Text>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
