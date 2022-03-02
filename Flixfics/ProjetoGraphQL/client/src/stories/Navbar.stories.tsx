import { Story, Meta } from "@storybook/react";
import { Container, Navbar, NavbarBrand, NavbarProps } from "react-bootstrap";

const meta: Meta = {
  title: "Navbar",
  component: Navbar,
};

export default meta;

interface NavProps extends NavbarProps {
  label: string;
  color?: string;
  backgroundColor?: string;
}

const Template: Story<NavProps> = (args) => (
  <Navbar
    bg={args.bg}
    style={{ backgroundColor: args.backgroundColor }}
    expand={args.expand}
    variant={args.variant}
  >
    <Container>
      <NavbarBrand style={{ color: args.color }}>{args.label}</NavbarBrand>
    </Container>
  </Navbar>
);

export const Main = Template.bind({});
Main.args = {
  backgroundColor: "#14213D",
  label: "Default Navbar",
  color: "#FCA311",
  expand: "lg",
};
