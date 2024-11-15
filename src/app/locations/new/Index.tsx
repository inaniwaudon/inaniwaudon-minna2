import PageWrapper from "@/components/common/PageWrapper";
import { useEffect } from "react";
import Content from "./Content";

const Index = () => {
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      const currentUrl = new URL(location.href);
      const url = new URL("/auth/signin", import.meta.env.VITE_BACKEND_URL);
      const callbackUrl = new URL("/auth/callback", currentUrl.origin);
      callbackUrl.searchParams.append(
        "callback",
        currentUrl.pathname + currentUrl.hash,
      );
      url.searchParams.append("callback", callbackUrl.href);
      location.href = url.href;
    }
  });

  return (
    <PageWrapper title="新規登録" path="/locations/register">
      <Content />
    </PageWrapper>
  );
};

export default Index;
