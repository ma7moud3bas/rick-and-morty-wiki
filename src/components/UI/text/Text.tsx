import { cva, VariantProps } from "cva";
import { ReactNode } from "react";

const textStyles = cva("leading-4", {
    variants: {
        size: {
            small: "text-sm",
            medium: "text-base",
            large: "text-lg",
            xl: "text-xl"
        },
        weight: {
            light: "font-light",
            normal: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold"
        }
    },
})

type TextStylesProps = VariantProps<typeof textStyles>

export interface TextProps extends Omit<TextStylesProps, "size" | "weight"> {
    variant: `${NonNullable<TextStylesProps["size"]>}/${NonNullable<TextStylesProps["weight"]>}`,
    children: ReactNode
}

export default function Text({ variant, children, ...props }: TextProps) {
    const [size, weight] = variant.split("/") as [TextStylesProps["size"], TextStylesProps["weight"]]
    return <div className={textStyles({ size, weight, ...props })}>{children}</div>
} 