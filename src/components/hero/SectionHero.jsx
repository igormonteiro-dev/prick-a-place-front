import imagePng from "../../assets/images/svitlana-AJOljRIblG8.jpg";
import ForestIcon from "@mui/icons-material/Forest";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function SectionHero() {
  return (
    <div className="relative overflow-hidden bg-[#fff]">
      <div className="mx-auto max-w-7xl ">
        <div className="relative z-10 bg-[#fff] pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-24 xl:pb-30">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-20">
            <div className="sm:text-center lg:text-left pt-10">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  The best places to picnic
                </span>{" "}
                <span className=" block text-[#ff395c] xl:inline">
                  in Paris
                </span>
              </h1>
              <div className="mt-10">
                <p className=" text-base text-gray-600 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-2 md:text-base lg:mx-0">
                  <ForestIcon sx={{ color: "#50d71e", fontSize: 30, mr: 1 }} />{" "}
                  Select your mood
                </p>

                <p className="text-base text-gray-600 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-2 md:text-base lg:mx-0">
                  <FavoriteIcon
                    sx={{ color: "#ff395c", fontSize: 30, mr: 1 }}
                  />{" "}
                  Save, comment and share!
                </p>
                <p className="text-base text-gray-600 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-2 md:text-base lg:mx-0">
                  <ShoppingBasketIcon
                    sx={{ color: "#ff7624", fontSize: 30, mr: 1 }}
                  />{" "}
                  Invite your picmates and plan your basket (under construction)
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/3">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={imagePng}
          alt=""
        />
      </div>
    </div>
  );
}

export default SectionHero;
