import React from "react";

const UserCard = ({ user }) => {
  const {
    avatar_url,
    name,
    login,
    public_repos,
    public_gists,
    created_at,
    html_url,
  } = user;

  const formatedDate = new Date(created_at).toLocaleDateString();

  return (
    <div className="w-9/12 bg-[#1a202c] p-6 mt-4 rounded-lg shadow-lg text-white md:w-3/12">
      <img
        src={avatar_url}
        alt="User Avatar"
        className="w-44 h-44 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-bold">{login}</h2>
      <p className="text-lg mb-2">{name}</p>
      <p className="text-sm mb-2">
        Public Repos: {public_repos} | Public Gists: {public_gists}
      </p>
      <p className="text-sm">Created at: {formatedDate}</p>

      <div className="flex justify-center">
        <a
          href={html_url}
          target={"_blank"}
          className="bg-[#323d54] px-3 py-2 rounded-lg mt-4 m-auto hover:bg-[#283144]"
        >
          See Profile
        </a>
      </div>
    </div>
  );
};

export default UserCard;
