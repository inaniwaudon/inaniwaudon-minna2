import { useEffect } from "react";

export const useRedirect = () => {
  useEffect(() => {
    const authAge = localStorage.getItem("auth");
    if (!authAge || Number.parseInt(authAge) * 1000 < Date.now()) {
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
};
