import PageWrapper from "@/components/common/PageWrapper";
import { useRedirect } from "../lib/useRedirect";
import Content from "./Content";

const Index = () => {
  useRedirect();

  return (
    <PageWrapper title="新規登録" path="/locations/register">
      <Content />
    </PageWrapper>
  );
};

export default Index;
