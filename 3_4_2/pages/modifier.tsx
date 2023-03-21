import { NextPage } from "next";

const modifier: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details className="select-none open:text-white open:bg-indigo-400">
        <summary className="cursor-pointer">What is my fav. food.</summary>
        <span>김치</span>
      </details>
      <ul className="list-decimal marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      <input
        type="file"
        className="file:cursor-pointer file:border-0 file:rounded-xl file:bg-purple-400 file:text-white file:hover:bg-white file:hover:text-purple-400 file:hover:border"></input>
      <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sed hic
        modi recusandae quas quos ea esse neque perspiciatis debitis laborum
        laboriosam, distinctio eligendi corrupti, fuga fugiat, nam vero magni?
      </p>
    </div>
  );
};

export default modifier;
