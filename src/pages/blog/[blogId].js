import { useRouter } from "next/router";
import useSWR from "swr";
import parse from "html-react-parser";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  const url = `https://dev.to/api/articles/${blogId}`;

  const { data: blogDetail = {}, isLoading } = useSWR(url, fetcher);

  if (isLoading) return <div>Loading</div>;

  const body_html = blogDetail?.body_html;

  return (
    <>
      <div className="text-2xl">{blogDetail.title}</div>
      <div className="text-center">{parse(body_html)}</div>
    </>
  );
};

export default Page;
