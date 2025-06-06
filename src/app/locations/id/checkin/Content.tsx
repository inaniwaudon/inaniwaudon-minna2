import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import { MdClose, MdPlace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

import { dateToInput } from "@/lib/utils";
import { deleteCheckin, postImages, putCheckin } from "../../lib/api";
import { Button, Input, Textarea } from "../../lib/styles";
import {
  type Checkin,
  type FoursquarePlace,
  type Photo,
  isBase64Image,
  tempImagePrefix,
} from "../../lib/utils";
import Modal from "./Modal";
import PhotoUploader from "./PhotoUploader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LocationWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const LocationButton = styled(Button)`
  width: 24px;
  line-height: 24px;
  font-size: 24px;
  padding: 0px 8px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CheckinButton = styled(Button)`
  width: calc(100% - 8px * 2);
  text-align: center;
  padding: 8px;
`;

const DeleteButton = styled(Button)`
  width: calc(100% - 8px * 2);
  color: #c00;
  text-align: center;
  padding: 8px;
  border: 1px solid #c00;
  background: transparent;

  &:hover {
    background: rgba(204, 0, 0, 0.05);
  }
`;

const CancelButton = styled(Button)`
  width: calc(100% - 8px * 2);
  color: #666;
  text-align: center;
  padding: 8px;
  border: 1px solid #999;
  background: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

interface ContentProps {
  id: string;
  initialCheckin?: Checkin;
}

const Content = ({ id, initialCheckin }: ContentProps) => {
  const navigate = useNavigate();

  // 初期値の設定
  const [checkinId, _] = useState(initialCheckin?.id ?? uuidV4());
  const [location, setLocation] = useState(initialCheckin?.location ?? "");
  const [fsqPlace, setFsqPlace] = useState<FoursquarePlace | undefined>(
    initialCheckin?.fsqPlace ?? undefined,
  );
  const [description, setDescription] = useState(
    initialCheckin?.description ?? "",
  );
  const [photos, setPhotos] = useState<Photo[]>(initialCheckin?.photos ?? []);

  const initialDate = initialCheckin
    ? new Date(initialCheckin.datetime)
    : new Date();
  const [datetime, setDatetime] = useState(dateToInput(initialDate));

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [displaysModal, setDisplaysModal] = useState(false);

  const isDisabledButton = location === "" || datetime === "" || isSubmitting;

  // チェックイン
  const onClick = useCallback(async () => {
    setIsSubmitting(true);

    // 画像の変換中が存在する場合は投稿を拒否
    if (photos.some((photo) => photo.src.startsWith(tempImagePrefix))) {
      alert("画像を変換中です");
      return;
    }

    // 画像の投稿
    const webpBase64s = photos
      .filter((photo) => isBase64Image(photo.src))
      .map((photo) => photo.src);
    const imageResult = await postImages(id, webpBase64s);
    if (!imageResult.success) {
      alert(`画像のアップロードに失敗しました: ${imageResult.value}`);
      setIsSubmitting(false);
      return;
    }

    // base64 をファイル名に差し替え
    const newPhotos = [...photos];
    let base64Index = 0;
    for (const photo of newPhotos) {
      if (isBase64Image(photo.src)) {
        photo.src = imageResult.value[base64Index];
        base64Index++;
      }
    }

    const checkin: Checkin = {
      location,
      id: checkinId,
      datetime: new Date(datetime).toISOString(),
      fsqPlace,
      description,
      photos: newPhotos,
    };
    const checkinResult = await putCheckin(id, checkinId, checkin);
    if (!checkinResult.success) {
      alert(`チェックインに失敗しました: ${checkinResult.value}`);
      setIsSubmitting(false);
      return;
    }
    alert("チェックインしました");
    navigate(`/locations/${id}?checkin=${checkinId}`);
  }, [
    id,
    checkinId,
    location,
    datetime,
    fsqPlace,
    description,
    photos,
    navigate,
  ]);

  const onClickDeleteButton = useCallback(async () => {
    const ok = window.confirm("チェックインを削除しますか？");
    if (!ok) {
      return;
    }
    const checkinResult = await deleteCheckin(id, checkinId);
    if (!checkinResult.success) {
      alert(`チェックインの削除に失敗しました: ${checkinResult.value}`);
      return;
    }
    alert("チェックインを削除しました");
    navigate(`/locations/${id}`);
  }, [id, checkinId, navigate]);

  useEffect(() => {
    if (fsqPlace) {
      setLocation(fsqPlace.name);
    }
  }, [fsqPlace]);

  return (
    <>
      <Wrapper>
        <Part>
          <label htmlFor="id">ID</label>
          <Input type="text" id="id" value={id} readOnly />
        </Part>
        <Part>
          <label htmlFor="location">場所</label>
          <LocationWrapper>
            <Input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.currentTarget.value)}
            />
            {fsqPlace ? (
              <LocationButton onClick={() => setFsqPlace(undefined)}>
                <MdClose />
              </LocationButton>
            ) : (
              <LocationButton onClick={() => setDisplaysModal(true)}>
                <MdPlace />
              </LocationButton>
            )}
          </LocationWrapper>
        </Part>
        <Part>
          <label htmlFor="datetime">日時</label>
          <Input
            type="datetime-local"
            id="datetime"
            value={datetime}
            onChange={(e) => setDatetime(e.currentTarget.value)}
          />
        </Part>
        <Part>
          <label htmlFor="image">画像</label>
          <PhotoUploader id={id} photos={photos} setPhotos={setPhotos} />
        </Part>
        <Part>
          <label htmlFor="date">説明</label>
          <Textarea
            id="date"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
        </Part>
        <ButtonList>
          <CheckinButton disabled={isDisabledButton} onClick={onClick}>
            {initialCheckin ? "チェックインを更新" : "チェックイン"}
          </CheckinButton>
          {initialCheckin && (
            <DeleteButton onClick={onClickDeleteButton}>
              チェックインを削除
            </DeleteButton>
          )}
          <CancelButton onClick={() => navigate(`/locations/${id}`)}>
            キャンセル
          </CancelButton>
        </ButtonList>
      </Wrapper>
      <Modal
        displays={displaysModal}
        setFsqPlace={setFsqPlace}
        setDisplays={setDisplaysModal}
      />
    </>
  );
};

export default Content;
