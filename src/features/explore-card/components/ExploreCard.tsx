import EXPLORE_CARDS from "../../../constants/exploreCard";

const ExploreCard = () => {
  return (
    <div className="grid grid-cols-3 gap-2 ml-100 p-10 w-fit">
      {EXPLORE_CARDS.map(({icon, iconBackGroundStyling, header, description}) => (
        <div className="min-h-20 h-45 min-w-25 w-75 bg-primary-900 rounded-sm">
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