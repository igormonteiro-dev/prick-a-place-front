import { useContext } from "react";
import { AuthContext } from "../Context/Auth.context";
import { FavContext } from "../Context/Favorite.context";
import Favorite from "./Favorite";

export default function Favorites() {
  const { allFavorites } = useContext(FavContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8 pt-10">
      <h1 className="text-4xl tracking-tight text-gray-900 sm:text-2xl md:text-3xl">
        <span className="block xl:inline">{`${user.username}'s favorite places to picnic `}</span>{" "}
        <span className="block text-[#ff395c] xl:inline"> in Paris</span>
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {allFavorites.map((favorite) => (
          <Favorite key={favorite._id} {...favorite} />
        ))}
      </div>
    </div>
  );
}
