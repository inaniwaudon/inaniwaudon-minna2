import { fail, succeed } from "@/lib/utils";

export interface Watercolor {
  x_ratio: number;
  y_ratio: number;
  h: number;
}

export const fetchWatercolors = async () => {
  const url = new URL("/api/watercolors", import.meta.env.VITE_BACKEND_URL);
  try {
    const response = await fetch(url, {
      cache: "no-store",
    });
    if (!response.ok) {
      return fail(await response.text());
    }
    const tankas = (await response.json()) as Watercolor[];
    return succeed(tankas);
  } catch (e) {
    return fail(e);
  }
};

export const postWatercolor = async (body: Watercolor) => {
  const url = new URL("/api/watercolors", import.meta.env.VITE_BACKEND_URL);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      return fail(await response.text());
    }
    return succeed(null);
  } catch (e) {
    return fail(e);
  }
};
