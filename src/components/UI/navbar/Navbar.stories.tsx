import { Meta, StoryObj } from "@storybook/react"
import Navbar, { NavbarProps } from "@UI/navbar"

export default {
    title: "UI/Navbar",
    component: Navbar,
} as Meta<NavbarProps>

type Story = StoryObj<NavbarProps>

export const Primary: Story = {
    args: {}
} 