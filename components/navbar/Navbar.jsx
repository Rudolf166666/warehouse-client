import Link from "next/link";
import { Logo } from "../icons";
import { LogoWrapper, Wrapper, Title } from "./Navbar.styled";

export const Navbar = () => {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <LogoWrapper>
          <Logo />
          <Title>Warehouse App</Title>
        </LogoWrapper>
      </Link>
    </Wrapper>
  );
};
