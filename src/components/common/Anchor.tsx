import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const linkColor = "#666";
export const linkDarkColor = "#ccc";
export const linkUnderlineColor = "rgba(0, 0, 0, 0.2)";
export const linkUnderlineDarkColor = "rgba(255, 255, 255, 0.2)";
export const linkHoverColor = "rgba(223, 81, 168, 1.0)";

const Content = styled.span<{ dark: boolean }>`
  line-height: 1.3;
  color: ${({ dark }) => (dark ? linkDarkColor : linkColor)};
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: background 200ms;

  &:hover {
    color: ${linkHoverColor};
  }
`;

const Line = styled.span<{ dark: boolean }>`
  height: 1px;
  margin-top: 2px;
  background: ${({ dark }) => (dark ? linkUnderlineDarkColor : linkUnderlineColor)};
  display: block;
`;

interface PageAnchorProps {
  href: string;
  dark?: boolean;
  children: React.ReactNode;
}

const Anchor = ({ href, dark = false, children }: PageAnchorProps) => {
  const content = (
    <Content dark={dark}>
      {children}
      <Line dark={dark} />
    </Content>
  );

  if (href.startsWith("https://") || href.startsWith("http://")) {
    return <a href={href}>{content}</a>;
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
      <Link to={href} reloadDocument>
        {content}
      </Link>
    );
  }
  return <Link to={href}>{content}</Link>;
};

export default Anchor;
