import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Index = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      // LocalStorage から有効期限を削除
      localStorage.removeItem("auth");

      const url = new URL("/auth/signout", import.meta.env.VITE_BACKEND_URL);
      await fetch(url.href);

      const callback = searchParams.get("callback");
      navigate(callback ?? "/");
    })();
  }, [searchParams, navigate]);

  return <div>Redirecting...</div>;
};

export default Index;
