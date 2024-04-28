const SearchBar = ({ setUserName }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Find a user"
        className="w-full py-2 px-4 text-white placeholder-gray-400 bg-blue-900  focus:outline-none"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
    </div>
  );
};
export default SearchBar;
