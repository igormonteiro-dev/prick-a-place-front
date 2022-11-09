const Favorite = (favorite) => {
  if (!favorite.place) {
    return <></>;
  }

  return (
    <div key={favorite._id} className="group relative">
      <div className="h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 ">
        <img
          src={favorite.place.image}
          alt={favorite.place.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-700">
            <a href={`/places/${favorite.place._id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {favorite.place.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{favorite.place.zipCode}</p>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
