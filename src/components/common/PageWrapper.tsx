import styled from "@emotion/styled";
import { Helmet } from "react-helmet-async";

import Footer from "./Footer";
import Header from "./Header";

const Wrapper = styled.div`
  margin: 40px 56px;

  @media screen and (max-width: 500px) {
    margin: 30px 30px;
  }
`;

interface PageWrapperProps {
  title: string;
  description?: string;
  path: string;
  children: React.ReactNode;
}

const PageWrapper = ({
  title,
  description,
  children,
  path,
}: PageWrapperProps) => {
  return (
    <>
      <Helmet>
        <title>{title}｜いなにわうどん.みんな</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      <Wrapper>
        {children}
        <Footer title={title} path={path} />
        <Header />
      </Wrapper>
    </>
  );
};

export default PageWrapper;
