import { ReactNode } from "react";

interface Children {
  children: ReactNode;
}
const Container: React.FC<Children> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
