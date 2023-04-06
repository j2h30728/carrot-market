import React from "react";
import useSWR from "swr";

interface Response {
  url: string;
  isLiked: boolean;
}
export default () => {
  const API = "https://dogs-api.nomadcoders.workers.dev/";
  const { data, mutate } = useSWR<Response>(API);
  console.log(data);
  const handleVideo = () => {
    mutate();
  };
  const handleLiked = () => {
    mutate(prev => prev && { ...prev, isLiked: !prev.isLiked }, false);
  };
  return (
    <div>
      <h1>Woof.TV</h1>
      <div className="conatiner">
        <div className="video">
          <video width="450" height="450" autoPlay controls src={data?.url}>
            <source src={data?.url}></source>
          </video>
        </div>
        <div className="buttons">
          <button onClick={handleVideo}>New DOG 🐕</button>
          <button onClick={handleLiked}>
            {data?.isLiked ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                color="paleVioletRed">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                color="gray">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <style jsx>{`
        .conatiner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
        }
        .video {
          width: 450px;
          height: 450px;
        }
        .buttons {
          display: flex;
          width: 600px;
        }
        button {
          width: 100%;
          height: 60px;
          padding: 10px 80px;
          background-color: darkSlateBlue;
          border-radius: 50px;
          cursor: pointer;
          color: white;
          font-size: 20px;
        }
        button:last-of-type {
          margin-left: 10px;
          background-color: white;
          display: flex;
          justify-content: center;
        }
        svg {
          width: 35px;
          height: 35px;
        }
      `}</style>
    </div>
  );
};
