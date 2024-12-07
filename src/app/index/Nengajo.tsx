import styled from "@emotion/styled";

import Checkbox from "@/components/common/Checkbox";
import { useCustomParams } from "@/lib/useCustomParams";
import { nengajo } from "./const/nengajo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: column;
  gap: 16px;
`;

const ImgWrapper = styled.div<{ displays: boolean }>`
  display: ${(props) => (props.displays ? "block" : "none")};
`;

const Img = styled.img<{ aspectRatio: number }>`
  max-width: 500px;
  max-height: 500px;
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease;

  @media screen and (max-width: 500px) {
    max-width: 100%;
  }

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const tags = [
  { key: "2024", label: "2024", keyColor: "#fa981c" },
  { key: "2023", label: "2023", keyColor: "#ff32ab" },
  { key: "2022", label: "2022", keyColor: "#2656f3" },
];

const Nengajo = () => {
  const customParams = useCustomParams("year", false, "2024");
  const { isSelectedTag } = customParams;

  const yearStr = ["2024", "2023", "2022"].find((year) => isSelectedTag(year));
  const year = yearStr ? Number.parseInt(yearStr) : 2024;

  const currentNengajo = nengajo.find((item) => item.year === year);

  return (
    <>
      <Wrapper>
        <Navigation>
          <Checkbox paramKey="year" tags={tags} customParams={customParams} />
        </Navigation>
        {currentNengajo && (
          <ImgWrapper
            displays={currentNengajo.year === year}
            key={currentNengajo.year}
          >
            <a href={currentNengajo.src}>
              <Img
                src={currentNengajo.thumbnail}
                alt={currentNengajo.alt}
                aspectRatio={currentNengajo.width / currentNengajo.height}
                loading={currentNengajo.year === year ? "eager" : "lazy"}
              />
            </a>
          </ImgWrapper>
        )}
      </Wrapper>
    </>
  );
};

export default Nengajo;
