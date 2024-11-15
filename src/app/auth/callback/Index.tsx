import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Index = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // LocalStorage に有効期限をセット
    const age = Math.round(Date.now() / 1000 + 60 * 60 * 24);
    localStorage.setItem("auth", age.toString());

    const callback = searchParams.get("callback");
    navigate(callback ?? "/");
  }, [searchParams, navigate]);

  return <div>Redirecting...</div>;
};

export default Index;
