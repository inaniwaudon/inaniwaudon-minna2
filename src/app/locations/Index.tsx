import PageWrapper from "@/components/common/PageWrapper";

const title = "移動記";

const Index = () => {
  return (
    <PageWrapper
      title={title}
      description="21世紀はチェックインの世紀"
      path="/locations"
    >
      <ul>
        <li>海浜幕張</li>
      </ul>
    </PageWrapper>
  );
};

export default Index;
