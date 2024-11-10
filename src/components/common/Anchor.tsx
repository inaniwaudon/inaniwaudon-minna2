import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { linkColor, linkHoverColor, linkUnderlineColor } from "@/const/style";

const Content = styled.span`
  line-height: 1.3;
  color: ${linkColor};
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: background 200ms;

  &:hover {
    color: ${linkHoverColor};
  }
`;

const Line = styled.span`
  height: 1px;
  margin-top: 2px;
  background: ${linkUnderlineColor};
  display: block;
`;

interface PageAnchorProps {
  href: string;
  children: React.ReactNode;
}

const Anchor = ({ href, children }: PageAnchorProps) => {
  const content = (
    <Content>
      {children}
      <Line />
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
