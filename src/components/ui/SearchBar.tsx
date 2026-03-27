interface SearchbarProps {
  placeholder: string;
  searchbarStyling: string;
  buttonText: string;
}

const SearchBar = ({ placeholder, searchbarStyling, buttonText }: SearchbarProps) => {
  return (
    <div className="flex items-center justify-center">
      <input placeholder={placeholder} minLength={2} maxLength={80} className={searchbarStyling} type="text" />
      <button className="bg-primary-500 rounded-r-xl py-2.25 px-5 hover:bg-primary-500/85">{buttonText}</button>
    </div>
  )
}
export default SearchBar;