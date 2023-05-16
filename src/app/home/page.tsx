import Image from "next/image";
import {FaAngleUp} from "react-icons/fa"

export default async function Home() {
  const responseCountries = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/countries",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "a9679f81f6mshe6a2c39291b380fp1a82e4jsn1bab85b01030",
      },
    }
  );

  const countries = await responseCountries.json();

  console.log("countries", countries);

  return (
    <div className="flex flex-col items-center">
      {/* <select>
        {countries.response.map((country: { name: string; code: string }) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select> */}
      <div className="flex h-64 w-full flex-col items-center md:w-1/2">
        <div className="w-full px-4">
          <div className="relative flex flex-col items-center">
            <div className="w-full">
              <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                <div className="flex flex-auto flex-wrap"></div>
                <input
                  placeholder="Search by position"
                  className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                />
                <div className="flex w-8 items-center border-l border-gray-200 py-1 pl-2 pr-1 text-gray-300">
                  <button className="h-6 w-6 cursor-pointer text-gray-600 outline-none focus:outline-none">
                    <FaAngleUp/>
                  </button>
                </div>
              </div>
            </div>
            <div className="top-100 lef-0 max-h-select svelte-5uyqqj absolute z-40 w-full overflow-y-auto rounded bg-white shadow">
              <div className="flex w-full flex-col">
                <div className="w-full cursor-pointer rounded-b border-gray-100">
                  {countries.response.map(
                    (country: { name: string; code: string; flag: string }) =>
                      country.flag ? (
                        <div key={country.name} className="relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 hover:bg-teal-100">
                          <div className="flex w-6 flex-col items-center">
                            <div className="relative m-1 mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full">
                              <Image
                                src={
                                  !country || !country.flag ? "" : country.flag
                                }
                                alt={country.name}
                                width={64}
                                height={64}
                              />
                            </div>
                          </div>
                          <div className="flex w-full items-center">
                            <div className="mx-2 -mt-1  ">{country.name}</div>
                          </div>
                        </div>
                      ) : undefined
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
