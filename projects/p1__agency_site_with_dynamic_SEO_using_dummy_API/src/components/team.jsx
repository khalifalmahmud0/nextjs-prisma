import Image from "next/image";
import SectionHeader from "@/components/mini/sectionHeader";
import Link from "next/link";
const fetchData = async () => {

    try {
        let fetching = await fetch(process.env.API_URL+'TeamList');
        return fetching.json();
    } catch (e) {
        throw new Error("Data Fetching Fail!");
    }
}
const Team = async () => {
    let data = await fetchData();

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
                <SectionHeader heading={"Team"} sub_heading={"Sub Team"} />
                <div className="flex flex-wrap -m-4">
                    {
                        data?.map((item,index) => {
                            return (
                                <div key={index} className="p-4 lg:w-1/2">
                                    <div
                                        className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
                                    >

                                        <Image
                                            width={200}
                                            height={200}
                                            alt="team"
                                            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                            src={item?.image ? item?.image : 'https://dummyimage.com/200x200'}
                                        />
                                        <div className="flex-grow sm:pl-8">
                                            <h2 className="title-font font-medium text-lg text-gray-900">
                                                {item?.name ? item?.name : 'No Name'}
                                            </h2>

                                            <p className="mb-4">
                                                {item?.bio ? item?.bio : 'No Bio'}
                                            </p>
                                            <span className="inline-flex">
              <Link href={item?.facebook ? item?.facebook : '#'} className="text-gray-500">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    strokeWidth={"2"}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link href={item?.twitter ? item?.twitter : '#'} className="ml-2 text-gray-500">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    strokeWidth={"2"}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                >
                  <path
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  ></path>
                </svg>
              </Link>
              <Link href={item?.instagram ? item?.instagram : '#'}  className="ml-2 text-gray-500">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    strokeWidth={"2"}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                >
                  <path
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                  ></path>
                </svg>
              </Link>
            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
};

export default Team;