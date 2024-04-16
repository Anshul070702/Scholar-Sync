import Banner from "./components/Banner";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";
import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";
import CollabPostCard from "components/card/CollabPost";
import { getAllJobPost, getJobsOfSameCollege } from "../../../constants/api";
import { data1, data2 } from "../../../constants/useCardData";
import { useState, useEffect } from "react";

const Marketplace = () => {
  const [APIdata1, setData1] = useState([])
  const [APIdata2, setData2] = useState([])

  useEffect(() => {
    handle()
  }, [])
  // API Call
  const handle = async (e) => {
    try {
      const token = localStorage.getItem("token");
      console.log("tried");
      const response = await fetch(getAllJobPost, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      });
      const response2 = await fetch(getJobsOfSameCollege, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      });
      // console.log(response)
      if (!response.ok || !response2.ok) {
        throw new Error("Network response was not ok");
      } else {
        const responseData1 = await response.json();
        const responseData2 = await response2.json();
        setData1(responseData1.data);
        setData2(responseData2.data);
        // Store the token in local storage
        console.log(responseData1.data);
        console.log(responseData2.data);
      }
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };



  return (

    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      {/* Left side section */}
      <div className="col-span-1 h-full overflow-y-auto xl:col-span-1 2xl:col-span-2">
        {/* Collaboration Banner */}
        <Banner />
        {/* Collaboration Header */}
        <div className="flex-start mb-4 mt-5 flex justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Recent Openings
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Domain
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Institution
              </a>
            </li>
          </ul>
        </div>

        {/* Trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-1">
          {APIdata1.map((data, index) => (
            <CollabPostCard key={index} data={data} />
          ))}
        </div>

        {/* Recently Added section */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Openings at IIIT-Pune
          </h4>
        </div>

        {/* Recently Added NFTs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-1">
          {APIdata2.map((data, index) => (
            <CollabPostCard key={index} data={data} />
          ))}
        </div>
      </div>

      {/* Right side section */}
      <div className="col-span-1 h-full overflow-y-auto rounded-xl 2xl:col-span-1">
        {/* TopCreatorTable */}
        <TopCreatorTable
          extra="mb-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        />
        {/* HistoryCard */}
        <HistoryCard />
      </div>
    </div>
  );
};

export default Marketplace;


// import NFt2 from "assets/img/nfts/Nft2.png";
// import NFt4 from "assets/img/nfts/Nft4.png";
// import NFt3 from "assets/img/nfts/Nft3.png";
// import NFt5 from "assets/img/nfts/Nft5.png";
// import NFt6 from "assets/img/nfts/Nft6.png";
// import avatar1 from "assets/img/avatars/avatar1.png";
// import avatar2 from "assets/img/avatars/avatar2.png";
// import avatar3 from "assets/img/avatars/avatar3.png";