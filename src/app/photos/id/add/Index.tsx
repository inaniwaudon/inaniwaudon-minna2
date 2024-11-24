import styled from "@emotion/styled";
import { useParams, useSearchParams } from "react-router-dom";

import NotFound from "@/app/404/Index";
import { useEffect, useState } from "react";
import { photos } from "../../const";

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const Image = styled.img`
  width: 300px;
`;

const Information = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const Input = styled.input`
  width: 100%;
  border-bottom: solid 1px #ccc;
  border-radius: 0;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: fixed;
  top: 16px;
  left: 16px;
`;

const Button = styled.button`
  color: #fff;
  padding: 6px 12px 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  background: #666;

  &:hover {
    background: #999;
  }
`;

const DeleteButton = styled(Button)`
  background: #c00;

  &:hover {
    background: #f00;
  }
`;

const Main = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [photoInfo, setPhotoInfo] = useState<
    Record<string, { title: string; place: string }>
  >({});

  const photoData = photos.find((photo) => photo.data?.key === id)?.data;
  if (!photoData) {
    return <NotFound />;
  }

  const dir = searchParams.get("dir") ?? "";

  const updateTitle = (src: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const newPhotoInfo = { ...photoInfo };
    if (photoInfo[src]) {
      newPhotoInfo[src] = { ...photoInfo[src], title: value };
    } else {
      newPhotoInfo[src] = { title: value, place: "" };
    }
    setPhotoInfo(newPhotoInfo);
    localStorage.setItem("photoInfo", JSON.stringify(newPhotoInfo));
  };

  const updatePlace = (src: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const newPhotoInfo = { ...photoInfo };
    if (photoInfo[src]) {
      newPhotoInfo[src] = { ...photoInfo[src], place: value };
    } else {
      newPhotoInfo[src] = { title: "", place: value };
    }
    setPhotoInfo(newPhotoInfo);
    localStorage.setItem("photoInfo", JSON.stringify(newPhotoInfo));
  };

  const output = () => {
    const photos = photoData.photos.map((photo) => ({
      ...photo,
      ...photoInfo[photo.src],
    }));
    const blob = new Blob([JSON.stringify(photos)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "photoInfo.json";
    a.click();
  };

  const deleteAll = () => {
    const ok = window.confirm("全て削除しますか？");
    if (ok) {
      localStorage.removeItem("photoInfo");
      alert("削除しました");
    }
  };

  useEffect(() => {
    const photoInfo = localStorage.getItem("photoInfo");
    if (photoInfo) {
      setPhotoInfo(JSON.parse(photoInfo));
    }
  }, []);

  return (
    <>
      <main>
        {photoData.photos.map((photo) => (
          <Row key={photo.src}>
            <a href={dir + photo.src}>
              <Image src={dir + photo.src} alt={photo.title} />
            </a>
            <Information>
              <div>
                タイトル
                <br />
                <Input
                  type="text"
                  value={photoInfo[photo.src]?.title ?? ""}
                  onChange={(e) => updateTitle(photo.src, e)}
                />
              </div>
              <div>
                場所
                <br />
                <Input
                  type="text"
                  value={photoInfo[photo.src]?.place ?? ""}
                  onChange={(e) => updatePlace(photo.src, e)}
                />
              </div>
            </Information>
          </Row>
        ))}
      </main>
      <Navigation>
        <Button onClick={output}>出力</Button>
        <DeleteButton onClick={deleteAll}>全削除</DeleteButton>
      </Navigation>
    </>
  );
};

export default Main;
