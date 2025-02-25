import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import * as prod from "react/jsx-runtime";
import rehypeReact from "rehype-react";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import NotFound from "@/app/404/Index";
import Anchor from "@/components/common/Anchor";
import PageWrapper from "@/components/common/PageWrapper";
import { classImpressions } from "../const";

const Wrapper = styled.div`
  max-width: 1000px;
`;

const Nav = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Main = styled.main`
  max-width: 600px;
  text-align: justify;

  h2 {
    color: #444;
    font-size: 20px;
    padding-left: 16px;
    border-left: solid 1px #333;
  }

  h3 {
    color: #333;
    font-size: 16px;
    font-weight: normal;
    margin: 0 0 4px 0;
  
    &:before {
      color: #ccc;
      content: '# ';
      margin-right: 4px;
    }
  }

  ul {
    margin: 0;
    padding: 0 0 0 1.5rem;
  }
`;

const getInformation = (id?: string) =>
  classImpressions.find((item) => id === item.year + item.term)!;

const termToJapanese = (term: string) => (term === "spring" ? "春" : "秋");

const getTitle = (year: number, term: string) =>
  `${year} 年度 ${termToJapanese(term)}学期 授業感想`;

const Index = () => {
  const { id } = useParams();
  const info = getInformation(id);
  if (!info) {
    return <NotFound />;
  }

  const { year, term, description, article } = info;
  const title = getTitle(year, term);

  const contents = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, {
      Fragment: prod.Fragment,
      jsx: prod.jsx,
      jsxs: prod.jsxs,
    })
    .processSync(article).result;

  return (
    <PageWrapper title={title} path={`/class-impression/${id}`}>
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
          <p>{description}</p>
          <p>
            {year} 年度{termToJapanese(term)}
            学期に筑波大学で開講された授業の感想をまとめたものです。
            <br />
            あくまでも個人の主観に基づいた評価です。
          </p>
        </header>
        <Main>{contents}</Main>
      </Wrapper>
    </PageWrapper>
  );
};

export default Index;
