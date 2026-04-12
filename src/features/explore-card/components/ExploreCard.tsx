import EXPLORE_CARDS from "../../../constants/exploreCard";

const ExploreCard = () => {
  return (
    <div className="grid grid-cols-3 gap-5 ml-50 p-10 w-fit">
      {EXPLORE_CARDS.map(({icon, iconBackGroundStyling, header, headerStyling, description, primaryColor}) => (
        <div className={`min-h-20 h-45 min-w-25 w-75 bg-primary-900 rounded-sm hover:shadow-xl/60 -transition duration-300 ${primaryColor}`}>
          <div className="ml-3 mt-5">
            <a className={iconBackGroundStyling}>{icon}</a>
          </div>
          <p className="block mt-7 ml-3 font-bold text-white">{header}</p>
          <p className="block px-3 mt-2 text-sm text-white">{description}</p>
        </div>))}
    </div>
  );
};

export default ExploreCard;