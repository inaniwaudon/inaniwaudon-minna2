import styled from "@emotion/styled";
import { useMemo } from "react";

import AnchorListItem from "@/components/common/AnchorListItem";
import Checkbox from "@/components/common/Checkbox";
import CustomList from "@/components/common/CustomList";
import PageTitle from "@/components/common/PageTitle";
import PageWrapper from "@/components/common/PageWrapper";
import { useCustomParams } from "@/lib/useCustomParams";
import { type ArticleTag, articleLinks, articleTags } from "./articles";

const TopHeader = styled.header`
  margin-bottom: 16px;
`;

const title = "書いたもの・こと";

const tags = [
  { key: "hongoshi", label: "hongoshi", keyColor: "#ff32ab" },
  { key: "tech", label: "tech", keyColor: "#cc22db" },
  { key: "design", label: "design", keyColor: "#2656f3" },
  { key: "random", label: "random", keyColor: "#009ae1" },
  { key: "speaking", label: "speaking", keyColor: "#00b300" },
];

const Index = () => {
  const customParams = useCustomParams("tag", true, undefined);
  const { isSelectedTag } = customParams;

  const selectedTags: ArticleTag[] = articleTags.filter((tag) =>
    isSelectedTag(tag),
  );

  const filteredLinks = useMemo(
    () =>
      selectedTags.length > 0
        ? articleLinks.filter(
            (link) =>
              link.tags &&
              selectedTags.every((tag) =>
                (link.tags as string[]).includes(tag),
              ),
          )
        : articleLinks,
    [selectedTags],
  );

  return (
    <PageWrapper title={title} path="/articles">
      <main>
        <TopHeader>
          <PageTitle>{title}</PageTitle>
          <Checkbox paramKey="tag" tags={tags} customParams={customParams} />
        </TopHeader>
        <CustomList>
          {filteredLinks.map((link) => (
            <AnchorListItem
              key={link.href}
              href={link.href}
              title={link.title}
              date={link.date}
              description={link.description}
            />
          ))}
        </CustomList>
      </main>
    </PageWrapper>
  );
};

export default Index;
