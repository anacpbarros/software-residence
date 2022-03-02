import { Container as BContainer } from "react-bootstrap";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <BContainer>
        {children}
      </BContainer>
      <Footer />
    </>
  );
};
