const NavBar = () => {
  const userDataString = localStorage.getItem("userData");
  const userData = JSON.parse(userDataString);
  return (
    <div className="flex h-[10%] items-center justify-between rounded-tl-md bg-[#5f67ff] px-1 text-sm text-white">
      <div className="font-bold">Scholar Chat</div>
      <div className="flex items-center gap-1">
        <p>{userData?.data?.User?.fullName}</p>
      </div>
    </div>
  );
};
export default NavBar;
