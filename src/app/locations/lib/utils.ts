import imageCompression from "browser-image-compression";

import { type Result, fail, succeed } from "@/lib/utils";
import styled from "@emotion/styled";
import { UAParser } from "ua-parser-js";

export const Loading = styled.div`
  @keyframes ball-scale {
    0% {
      transform: scale(0.0);
    }
    100% {
      transform: scale(1.0);
      opacity: 0;
    }
  }

  width: 60px;
  height: 60px;
  margin: auto;
  border-radius: 50%;
  background: hsla(40, 60%, 50%, 0.8);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: ball-scale 1s 0s ease-in-out infinite;
`;

export interface Transportation {
  title: string;
  date: string;
  checkins: Checkin[];
}

export interface Checkin {
  location: string;
  id: string;
  datetime: string;
  fsqPlace?: FoursquarePlace;
  description: string;
  photos: Photo[];
}

export interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

export interface FoursquarePlace {
  fsqId: string;
  name: string;
  latitude?: number;
  longitude?: number;
  formattedAddress: string;
}

export interface FoursquareOriginalPlace {
  fsq_id: string;
  geocodes?: {
    latitude: number;
    longitude: number;
  };
  distance?: number;
  location: {
    address?: string;
    address_extended?: string;
    country: string;
    cross_street?: string;
    formatted_address: string;
    locality?: string;
    postcode?: string;
    region: string;
  };
  name: string;
}

export const convertImageToWebp = (file: File) =>
  new Promise<Result<string, null>>((resolve) => {
    const MAX_SIZE = 2500;

    (async () => {
      // Safari は WebP のエンコードに未対応なため、JPEG を採用する
      const ua = new UAParser();
      const browserName = ua.getBrowser().name;
      const fileType =
        browserName === "Safari" || browserName === "Mobile Safari"
          ? "image/jpeg"
          : "image/webp";
      const compressed = await imageCompression(file, {
        fileType,
        maxSizeMB: 0.7,
        maxWidthOrHeight: MAX_SIZE,
        initialQuality: 0.7,
      });

      const reader = new FileReader();
      reader.readAsDataURL(compressed);
      reader.onload = () => {
        resolve(succeed(reader.result as string));
      };
      reader.onerror = () => {
        resolve(fail(null));
      };
    })();
  });

export const isBase64Image = (src: string) => {
  return src.startsWith("data:image/");
};

export const getImageUrl = (id: string, src: string) => {
  if (src.startsWith("http") || src.startsWith("https")) {
    return src;
  }
  if (isBase64Image(src)) {
    return src;
  }
  const url = new URL(
    `/locations/${id}/${src}`,
    import.meta.env.VITE_PHOTO_URL,
  );
  return url.href;
};

export const tempImagePrefix = "@temp:";

export const getCurrentPosition = () =>
  new Promise<Result<{ latitude: number; longitude: number }, string>>(
    (resolve) => {
      navigator.geolocation.getCurrentPosition(
        (result) => {
          resolve(
            succeed({
              latitude: result.coords.latitude,
              longitude: result.coords.longitude,
            }),
          );
        },
        (e) => {
          resolve(fail(e.message));
        },
      );
    },
  );
