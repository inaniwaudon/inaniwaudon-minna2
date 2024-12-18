import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

import AdobeFonts from "@/components/common/AdobeFonts";
import H2 from "@/components/common/H2";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";
import Form from "./Form";
import PlusOne from "./PlusOne";
import { type Tanka, fetchTankas } from "./api";

const TankaList = styled.ul`
  width: 100%;
  height: 20em;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 24px;
  overflow: scroll;
`;

const TankaItem = styled.li`
  line-height: 1.4;
  font-size: 18px;
  font-family: kinuta-maruminold-stdn, serif;
  writing-mode: vertical-rl;
  overflow-wrap: break-word;
`;

const TankaItem1680 = styled(TankaItem)`
  @keyframes color1680 {
    0%,
    100% {
      color: red;
    }
    10% {
      color: pink;
    }
    20% {
      color: orange;
    }
    30% {
      color: gold;
    }
    40% {
      color: limegreen;
    }
    50% {
      color: green;
    }
    60% {
      color: skyblue;
    }
    70% {
      color: blue;
    }
    80% {
      color: purple;
    }
    90% {
      color: mediumvioletred;
    }
  }

  animation-name: color1680;
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const TankaAuthor = styled.div`
  text-align: right;
  font-size: 14px;
  margin-right: 4px;
`;

const FormSection = styled.div`
  margin-top: 24px;
`;

const FootnoteSection = styled.div`
  margin-top: 24px;
  padding-top: 8px;
  border-top: solid 1px #ddd;
`;

const title = "/tanka";
const description = "575 あつめてたのし最上川（#haiku）";

const Index = () => {
  const [tankas, setTankas] = useState<Tanka[]>([]);

  const convertsToVertical = (str: string) =>
    str.replace(/[A-Za-z0-9./:-]/g, (s) =>
      String.fromCharCode(s.charCodeAt(0) + 0xfee0),
    );

  const processTanka = (tanka: string) =>
    convertsToVertical(tanka.replaceAll(/[ 　]/g, ""));

  useEffect(() => {
    (async () => {
      const result = await fetchTankas();
      if (result.success) {
        setTankas(result.value);
      }
    })();
  });

  return (
    <>
      <AdobeFonts />
      <PageWrapper title={title} description={description} path="/tanka">
        <main>
          <PageTitle>{title}</PageTitle>
          <p>
            {description}
            <sup>
              <a href="#footnote">[1]</a>
            </sup>
          </p>
          <section>
            <TankaList>
              {tankas.map((tanka) => {
                const content = (
                  <React.Fragment key={tanka.id}>
                    {processTanka(tanka.tanka)}
                    <TankaAuthor>
                      {convertsToVertical(tanka.name)}（{tanka.ip}）
                      <PlusOne
                        tankaId={tanka.id}
                        initialCount={tanka.plusone_count}
                      />
                    </TankaAuthor>
                  </React.Fragment>
                );
                return tanka.supplement?.includes("1680") ? (
                  <TankaItem1680 key={tanka.id} title={tanka.comment ?? ""}>
                    {content}
                  </TankaItem1680>
                ) : (
                  <TankaItem key={tanka.id} title={tanka.comment ?? ""}>
                    {content}
                  </TankaItem>
                );
              })}
            </TankaList>
          </section>
          <FormSection>
            <H2>投稿</H2>
            <Form />
          </FormSection>
          <FootnoteSection>
            <small>[1] 短歌のみならず、俳句、川柳、自由律も含む</small>
          </FootnoteSection>
        </main>
      </PageWrapper>
    </>
  );
};

export default Index;
