import React,{useState} from "react";
import UserCard from "./components/UserCard";
import ShimmerCard from "./components/ShimmerCard";
function App() {

  const [username, setUsername] = useState('');

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUserProfile = async()=>{
    setLoading(true);
    setError(null);
    setUser(null);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if(data.message){
      setLoading(false);
      setError("User not found");
      return;
    }
    setUser(data);
    setLoading(false);
  }

  const handleGetUser = ()=>{
    if(!username){
      setError("Please enter a username");
      return;
    }
    getUserProfile();
  }

  return (
    <div className="bg-[#0a121c] min-h-screen ">

      <div className="pt-5 flex flex-col items-center justify-center m-auto">

      
      <div className="mt-4">
        <h3 className="text-[#ccc] text-lg">Enter Github Username eg: harshilsharmaa</h3>
        <input
          type="text"
          placeholder="Enter here..."
          className="mt-3 px-3 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button 
        onClick={handleGetUser}
        className="px-4 py-2 ml-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
          Submit
        </button>
      </div>

      {
        error ? <p className="text-red-500 mt-4 font-bold text-xl">{error} 😥</p> : null
      }

      {
        user ? <UserCard user={user} /> : loading ? <ShimmerCard/> :null
      }
      
      </div>
    </div>
  );
}

export default App;
