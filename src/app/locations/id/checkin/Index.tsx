import PageWrapper from "@/components/common/PageWrapper";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import NotFound from "@/app/404/Index";
import { fetchTransportation } from "../../lib/api";
import { useRedirect } from "../../lib/useRedirect";
import { type Checkin, Loading } from "../../lib/utils";
import Content from "./Content";

const Page = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [initialCheckin, setInitialCheckin] = useState<Checkin>();
  const [loading, setLoading] = useState(true);
  useRedirect();

  useEffect(() => {
    (async () => {
      if (!id) {
        return;
      }
      // checkin が指定された場合はそのチェックイン情報を取得
      if (searchParams.has("checkin")) {
        const result = await fetchTransportation(id);
        if (result.success) {
          setInitialCheckin(
            result.value.checkins.find(
              (checkin) => checkin.id === searchParams.get("checkin"),
            ),
          );
        }
      }
      setLoading(false);
    })();
  }, [id, searchParams]);

  if (!id) {
    return <NotFound />;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <PageWrapper title="新規登録" path="/locations/register">
          <Content id={id} initialCheckin={initialCheckin} />
        </PageWrapper>
      )}
    </>
  );
};

export default Page;
