import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid-10 grid bg-slate-400 py-20 px-10">
      <div className="mb-10 rounded-2xl bg-white p-10 shadow-xl">
        <span>Select Item</span>
        <div>
          <span></span>
        </div>
      </div>
      <div className="mb-10 rounded-2xl bg-white p-10 shadow-xl"></div>
      <div className="mb-10 rounded-2xl bg-white p-10 shadow-xl"></div>
      <div className="mb-10 rounded-2xl bg-white p-10 shadow-xl"></div>
      <div className="mb-10 rounded-2xl bg-white p-10 shadow-xl"></div>
    </div>
  );
};

export default Home;
