import { useParams } from "react-router-dom";

function User() {
  const params = useParams();
  console.log(`In user ${params.name}`);

  return (
    <div className=" user-profile p-5 w-62 ">
      <h1 className="">Welcome, {params.name}!</h1>
      <p className="mt-6 ">
        You are now logged in to your page. You will receive a
        confirmation email soon!
      </p>
      <button className="user-btn mt-10 flex items-center">
        <a href="/home" className="btn">
          Go Home
        </a>
      </button>
    </div>
  );
}

export default User;
