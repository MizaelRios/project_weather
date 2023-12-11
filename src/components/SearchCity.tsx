import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { City, Citys, SearchCityProps, State } from "@/types";
import { fetchCitys } from "@/lib/fetchIbge";

const SearchCity = ({uf, citySelected, setCity }: SearchCityProps) => {
  const [query, setQuery] = useState("");
  const [citys, setCitys] = useState<Citys>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cityResp = await fetchCitys(uf);
        setCitys(cityResp);
      } catch (err) {
        console.log('Error occurred when fetching Citys');
      }
    };

    fetchData();
  }, [uf]);


  const filteredCitys =
    query === ""
      ? citys
      : citys?.filter((item) =>
        item.nome.toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      );

  return (
    <div className='search-city'>
      <Combobox value={citySelected || null} onChange={setCity} >
        <div className='relative w-full'>
          <Combobox.Input
            className='search-city__input'
            displayValue={(city: City) => city?.nome}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Cidade...'
          />
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {filteredCitys?.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className='search-city__option'
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredCitys?.map((city) => (
                  <Combobox.Option
                    key={city?.id}
                    className={({ active }) =>
                      `relative search-city__option ${active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={city}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {city?.nome}
                        </span>
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchCity;
