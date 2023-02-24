import type { NextPage } from "next";
import axios from "axios";
import { Video } from "../types";
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";
import { BASE_URL } from "../utils";

interface Iprops {
  videos: Video[];
}

const Home = ({ videos }: Iprops) => {
  console.log(videos);
  return (
    <div className="flex flex-col gap-10 videos h-full scroll">
      {videos.length ? (
        videos.map((video: Video) => {
          return <VideoCard post={video} key={video._id} />;
        })
      ) : (
        <NoResults text={"No Videos"} />
      )}
    </div>
  );
};
export default Home;

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = await axios.get(`${BASE_URL}/api/post`);

  if (topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  }

  return {
    props: { videos: response.data },
  };
};
