import styled from "@emotion/styled";

import Anchor from "@/components/common/Anchor";
import PageWrapper from "@/components/common/PageWrapper";
import { classImpressions } from "./const";

const Wrapper = styled.div`
  max-width: 1000px;
`;

const Nav = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const termToJapanese = (term: string) => (term === "spring" ? "春" : "秋");

const title = "授業感想";

const Index = () => {
  return (
    <PageWrapper title={title} path="/class-impression">
      <Wrapper>
        <header>
          <h1>{title}</h1>
          <Nav>
            {classImpressions.map((item) => {
              const id = item.year + item.term;
              return (
                <span key={id}>
                  <Anchor href={`/class-impression/${id}`}>
                    {item.year} 年度 {termToJapanese(item.term)}学期
                  </Anchor>
                </span>
              );
            })}
          </Nav>
        </header>
      </Wrapper>
    </PageWrapper>
  );
};

export default Index;
