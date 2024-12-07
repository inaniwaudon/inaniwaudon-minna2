// /script/compress-image.ts からも参照される

export interface PhotoData {
  title: string;
  date: string;
  key: string;
  photos: PhotoInfo[];
}

export interface PhotoInfo {
  src: string;
  title: string;
  place: string;
  date: string;
  width: number;
  height: number;
}

export const getPhotoDir = (id: string) => {
  return `${import.meta.env.VITE_PHOTO_URL}/photo/${id}`;
};
