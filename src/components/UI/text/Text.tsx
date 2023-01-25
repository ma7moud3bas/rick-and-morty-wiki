import { cva, VariantProps } from "cva";
import React, { ReactElement, ReactNode } from "react";

const textStyles = cva("", {
    variants: {
        size: {
            small: "text-sm",
            medium: "text-base",
            large: "text-lg",
            xl: "text-xl",
            "2xl": "text-2xl",
            header: "text-4xl xl:text-5xl"
        },
        weight: {
            light: "font-light",
            normal: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold"
        },
        color: {
            dark: "text-brand-dark dark:text-brand-light",
            light: "dark:text-brand-dark text-brand-light",
            green: "text-brand-green",
            yellow: "text-brand-yellow",
            brown: "text-brand-brown"
        },
    },
    defaultVariants: {
        color: "dark",
    }
})

// I'm sure there is a better way than this
const textTagNames = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "div"] as const
type HTMLTextElements = Pick<JSX.IntrinsicElements, typeof textTagNames[number]>


type TextStylesProps = VariantProps<typeof textStyles>
export interface TextProps extends Omit<TextStylesProps, "size" | "weight"> {
    variant: `${NonNullable<TextStylesProps["size"]>}/${NonNullable<TextStylesProps["weight"]>}`,
    children: ReactNode
    as?: keyof HTMLTextElements
    className?: string
}

export default function Text({ variant, children, className, as, color, ...props }: TextProps) {
    const [size, weight] = variant.split("/") as [NonNullable<TextStylesProps["size"]>, NonNullable<TextStylesProps["weight"]>]
    const ElementTag = as ? as : "div"
    return (
        <ElementTag {...props} className={textStyles({ size, weight, color, ...props }) + " " + className}>
            {children}
        </ElementTag>
    )
}   