import { type FC, PropsWithChildren } from "react";
import styled from "styled-components";

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <_BaseLayout>
      <div className="container">{children}</div>
    </_BaseLayout>
  );
};

const _BaseLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #2c2235;

  .container {
    width: 90%;
    height: 92%;
    border-radius: 10px;
    background-color: #130024;
  }
`;

export default BaseLayout;
