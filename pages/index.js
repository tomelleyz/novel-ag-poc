import InfoCard from "@/components/InfoCard";
import Layout from "@/components/Layout";
import Head from "next/head";
import * as Tooltip from "@radix-ui/react-tooltip";

const dummyData = [
  {
    id: 1,
    name: "Kakamo Farms",
    size: "8 Hectares",
    location: "Kaduna",
    crops: ["Rice", "Corn"],
    status: "active",
  },
  {
    id: 2,
    name: "Kakamo Farms",
    size: "8 Hectares",
    location: "Kaduna",
    crops: ["Rice", "Beans"],
    status: "inactive",
  },
  {
    id: 3,
    name: "Kakamo Farms",
    size: "8 Hectares",
    location: "Kaduna",
    crops: ["Rice", "Yam"],
    status: "active",
  },
  {
    id: 4,
    name: "Kakamo Farms",
    size: "8 Hectares",
    location: "Kaduna",
    crops: ["Corn", "Rice"],
    status: "active",
  },
  {
    id: 5,
    name: "Kakamo Farms",
    size: "8 Hectares",
    location: "Kaduna",
    crops: ["Yam", "Rice"],
    status: "inactive",
  },
  {
    id: 6,
    name: "Kakamo Farms",
    size: "8 Hectares",
    location: "Kaduna",
    crops: ["Beans", "Rice"],
    status: "active",
  },
  {
    id: 7,
    name: "Kakamo Farms",
    size: "8 Hectares",
    location: "Kaduna",
    crops: ["Rice"],
    status: "active",
  },
  {
    id: 8,
    name: "Kakamo Farms",
    size: "8 Hectares",
    location: "Kaduna",
    crops: ["Rice"],
    status: "active",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Novel AG | Dashboard</title>
        <meta name="description" content="Novel AG dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16B364"></meta>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <main>
        <Layout>
          <h1 className="mb-8 block text-2xl lg:hidden">Dashboard</h1>
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <button className="flex w-[50%] items-center rounded-[10px] border border-solid border-grey-25 bg-white py-1.5 pl-2 pr-3.5 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05),_inset_0px_-1.2px_0px_rgba(57,_73,_171,_0.13)]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden={true}
              >
                <path
                  d="M15.75 15.75L13.1251 13.125M15 8.625C15 12.1458 12.1458 15 8.625 15C5.10418 15 2.25 12.1458 2.25 8.625C2.25 5.10418 5.10418 2.25 8.625 2.25C12.1458 2.25 15 5.10418 15 8.625Z"
                  stroke="#A0A0AB"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-2 mr-auto font-outfit text-xs font-normal">
                Search
              </span>
            </button>
            <button className="inline-flex shrink-0 items-center gap-x-2 rounded-lg bg-green-400 px-3.5 py-2 font-inter text-sm font-semibold text-white shadow-[inset_0px_-2px_0px_#139A56]">
              <span>Add Farm</span>

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden={true}
              >
                <path
                  d="M8.25 14.25C8.25 14.6642 8.58579 15 9 15C9.41421 15 9.75 14.6642 9.75 14.25V9.75H14.25C14.6642 9.75 15 9.41421 15 9C15 8.58579 14.6642 8.25 14.25 8.25H9.75V3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75V8.25H3.75C3.33579 8.25 3 8.58579 3 9C3 9.41421 3.33579 9.75 3.75 9.75H8.25V14.25Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <div className="mb-9 flex flex-col flex-wrap gap-6 md:flex-row">
            <InfoCard
              linkToCardInfo="#"
              cardTitle="Balance"
              cardInfoValue="&#8358;0"
              cardInfoText="Recurring Revenue"
            />
            <InfoCard
              linkToCardInfo="#"
              cardTitle="No of farms"
              cardInfoValue="4"
              cardInfoText="In total"
            />
            <InfoCard
              linkToCardInfo="#"
              cardTitle="No of crops"
              cardInfoValue="500"
              cardInfoText="In total"
            />
            <InfoCard
              linkToCardInfo="#"
              cardTitle="Stock Quantity"
              cardInfoValue="23,456"
              cardInfoText="In total"
            />
          </div>

          <div>
            <h2 className="mb-5 text-lg font-medium">Farms</h2>

            <div className="overflow-x-auto rounded-[18px] border border-solid border-grey-150 drop-shadow-[0px_0.639628px_1.27926px_rgba(16,_24,_40,_0.05)]">
              <table className="w-full table-fixed border-collapse bg-white text-left font-satoshi text-xs font-medium text-grey-300">
                <thead>
                  <tr>
                    <th className="w-[150px] px-4 py-3 font-satoshi text-xs font-medium md:w-[190px] lg:px-6 xl:w-[16.666666%]">
                      Name
                    </th>
                    <th className="w-[150px] px-4 py-3 font-satoshi text-xs font-medium md:w-[190px] lg:px-6 xl:w-[16.666666%]">
                      <div className="flex items-center gap-1">
                        <span>Size</span>
                        <Tooltip.Provider delayDuration={0}>
                          <Tooltip.Root>
                            <Tooltip.Trigger>
                              <svg
                                width="15"
                                height="14"
                                viewBox="0 0 15 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="shrink-0"
                              >
                                <g clipPath="url(#clip0_1_3275)">
                                  <path
                                    d="M5.46919 5.25C5.60634 4.86014 5.87703 4.53139 6.23333 4.32199C6.58963 4.11259 7.00855 4.03604 7.41588 4.10591C7.82321 4.17578 8.19267 4.38755 8.45882 4.70372C8.72497 5.01989 8.87064 5.42005 8.87003 5.83333C8.87003 7 7.12003 7.58333 7.12003 7.58333M7.16669 9.91666H7.17253M13 7C13 10.2217 10.3884 12.8333 7.16669 12.8333C3.94503 12.8333 1.33336 10.2217 1.33336 7C1.33336 3.77834 3.94503 1.16666 7.16669 1.16666C10.3884 1.16666 13 3.77834 13 7Z"
                                    stroke="#A0A0AB"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_3275">
                                    <rect
                                      width="14"
                                      height="14"
                                      fill="white"
                                      transform="translate(0.166687)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content
                                className="z-10 w-[150px] select-none rounded-lg bg-black px-3 py-2 text-xs/tight text-white will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade md:w-[190px]"
                                sideOffset={8}
                                style={{
                                  filter:
                                    "drop-shadow(0px 100px 181px rgba(21, 30, 66, 0.04)) drop-shadow(0px 38.5185px 57.6519px rgba(21, 30, 66, 0.0242963)) drop-shadow(0px 8.14815px 14.7481px rgba(21, 30, 66, 0.0157037))",
                                }}
                              >
                                Additional information about size of the farm
                                <Tooltip.Arrow
                                  className="fill-black"
                                  width={12}
                                  height={6}
                                />
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </Tooltip.Provider>
                      </div>
                    </th>
                    <th className="w-[150px] px-4 py-3 font-satoshi text-xs font-medium md:w-[190px] lg:px-6 xl:w-[16.666666%]">
                      Location
                    </th>
                    <th className="w-[150px] px-4 py-3 font-satoshi text-xs font-medium md:w-[190px] lg:px-6 xl:w-[16.666666%]">
                      Crop(s)
                    </th>
                    <th className="w-[150px] px-4 py-3 font-satoshi text-xs font-medium md:w-[190px] lg:px-6 xl:w-[16.666666%]">
                      Status
                    </th>
                    <th className="w-[150px] px-4 py-3 font-satoshi text-xs font-medium md:w-[190px] lg:px-6 xl:w-[16.666666%]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dummyData.map((farm) => (
                    <tr key={farm.id}>
                      <td className="truncate border-t border-solid border-grey-150 bg-white px-4 py-5 transition duration-300 hover:bg-[#F7F7F7] lg:px-6">
                        {farm.name}
                      </td>
                      <td className="truncate border-t border-solid border-grey-150 bg-white px-4 py-5 transition duration-300 hover:bg-[#F7F7F7] lg:px-6">
                        {farm.size}
                      </td>
                      <td className="truncate border-t border-solid border-grey-150 bg-white px-4 py-5 transition duration-300 hover:bg-[#F7F7F7] lg:px-6">
                        {farm.location}
                      </td>
                      <td className="truncate border-t border-solid border-grey-150 bg-white px-4 py-5 transition duration-300 hover:bg-[#F7F7F7] lg:px-6">
                        {farm.crops.join(", ")}
                      </td>
                      <td className="truncate border-t border-solid border-grey-150 bg-white px-4 py-5 transition duration-300 hover:bg-[#F7F7F7] lg:px-6">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 ${
                            farm.status === "active"
                              ? "bg-green-200 text-green-300"
                              : "bg-red-100 text-red-200"
                          }`}
                        >
                          {farm.status === "active" ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="truncate border-t border-solid border-grey-150 bg-white px-4 py-5 transition duration-300 hover:bg-[#F7F7F7] lg:px-6">
                        <div className="flex gap-6">
                          <button>Edit</button>
                          <button>View</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-end pt-5">
            <div className="flex items-center justify-between gap-12 font-mulish text-sm font-normal text-grey-200 lg:gap-20">
              <div className="inline-flex items-center gap-x-2">
                <label htmlFor="rowsPerPage">Rows per page:</label>
                <select
                  name="rowsPerPage"
                  id="rowsPerPage"
                  className="select-bg appearance-none bg-transparent pl-1 pr-4 text-grey-300"
                >
                  <option value="4">4</option>
                  <option value="8">8</option>
                </select>
              </div>
              <div className="inline-flex items-center gap-x-6">
                <span>1&#8211;8 of 124</span>
                <div className="inline-flex gap-x-3">
                  <button>
                    <span className="sr-only">Previous</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden={true}
                    >
                      <path
                        d="M15 18L9.07071 12.0707C9.03166 12.0317 9.03166 11.9683 9.07071 11.9293L15 6"
                        strokeLinecap="round"
                        className="stroke-grey-200 stroke-2"
                      />
                    </svg>
                  </button>
                  <button>
                    <span className="sr-only">Next</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L14.9293 12.0707C14.9683 12.0317 14.9683 11.9683 14.9293 11.9293L9 6"
                        strokeLinecap="round"
                        className="stroke-grey-200 stroke-2"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
