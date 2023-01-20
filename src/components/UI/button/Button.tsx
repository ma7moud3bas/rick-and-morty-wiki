import { cva, VariantProps } from "cva";
import { ButtonOrLink, Props as ButtonOrLinkProps } from "./ButtonOrLink";

const buttonStyles = cva(
    "rounded py-2 px-3 flex text-center items-center justify-center font-medium font-satoshi focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80",
    {
        variants: {
            intent: {
                primary: "text-white bg-brand-green",
                secondary: " bg-gray-200 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500",
                danger: "bg-red-500 text-white focus:ring-red-500"
            },
            fullWidth: {
                true: "w-full",
            }
        },
        defaultVariants: {
            intent: "primary",
        }
    })

export interface Props extends ButtonOrLinkProps, VariantProps<typeof buttonStyles> { }

export default function Button({ intent, fullWidth, ...props }: Props) {
    return (
        <ButtonOrLink className={buttonStyles({ intent, fullWidth })} {...props} />
    )
}