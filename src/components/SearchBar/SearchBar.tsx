const SearchBar = () => {
  return (
    <div className="flex items-center justify-center">
      <input placeholder={"esh-altarofstorms"} minLength={2} maxLength={80} className="text-center w-3xl rounded-sm border-white border-2 inset-shadow-2xs focus:border-2 focus:ring-0" type="text" />
    </div>
  )
}
export default SearchBar;