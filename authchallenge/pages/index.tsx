import useUser from "@/lib/client/useUser";

export default function Home() {
  const { user, isLoading } = useUser();
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          <h1>Welcome {user?.name}</h1>
          <h4>Youremail is : {user?.email}</h4>
        </div>
      )}
    </>
  );
}
