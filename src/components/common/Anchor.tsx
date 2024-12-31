import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const linkColor = "#666";
export const linkDarkColor = "#ccc";
export const linkUnderlineColor = "rgba(0, 0, 0, 0.2)";
export const linkUnderlineDarkColor = "rgba(255, 255, 255, 0.2)";
export const linkHoverColor = "rgba(223, 81, 168, 1.0)";

const anchorStyle = css`
  line-height: 1.3;
  font-weight: 600;
  text-decoration-thickness: 1px;
  text-underline-offset: 5px;
  display: inline;
  cursor: pointer;
  transition: background 200ms;

  &:hover {
    color: ${linkHoverColor};
  }
`;

const CustomAnchor = styled.a<{ dark: boolean }>`
  ${anchorStyle}
  color: ${({ dark }) => (dark ? linkDarkColor : linkColor)};
  text-decoration-color: ${({ dark }) => (dark ? linkUnderlineDarkColor : linkUnderlineColor)};
`;

const CustomLink = styled(Link)<{ dark: boolean }>`
  ${anchorStyle}
  color: ${({ dark }) => (dark ? linkDarkColor : linkColor)};
  text-decoration-color: ${({ dark }) => (dark ? linkUnderlineDarkColor : linkUnderlineColor)};
`;

interface PageAnchorProps {
  href: string;
  dark?: boolean;
  children: React.ReactNode;
}

const Anchor = ({ href, dark = false, children }: PageAnchorProps) => {
  if (href.startsWith("https://") || href.startsWith("http://")) {
    return (
      <CustomAnchor href={href} dark={dark}>
        {children}
      </CustomAnchor>
    );
  }
  if (
    href.endsWith(".pdf") ||
    href.endsWith(".png") ||
    href.endsWith(".webp") ||
    href.endsWith(".jpeg") ||
    href.endsWith(".xml") ||
    href.endsWith(".json")
  ) {
    return (
      <CustomLink to={href} dark={dark} reloadDocument>
        {children}
      </CustomLink>
    );
  }
  return (
    <CustomLink to={href} dark={dark}>
      {children}
    </CustomLink>
  );
};

export default Anchor;
