import styled from "@emotion/styled";

const Ul = styled.ul`
  margin: 0;
  padding: 0 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  li {
    list-style: none;
    position: relative;

    &::before {
      width: 4px;
      height: 4px;
      margin-top: 12px;
      border-radius: 50%;
      content: "";
      background: #333;
      display: block;
      position: absolute;
      left: -16px;
    }
  }
`;

interface CustomListProps {
  children: React.ReactNode;
}

const CustomList = ({ children }: CustomListProps) => {
  return <Ul className={"List"}>{children}</Ul>;
};

export default CustomList;
