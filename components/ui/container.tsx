import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-auto w-full max-w-7xl">{children}</div>;
};

export default Container;
