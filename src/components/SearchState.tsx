import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { SearchStatesProps, States } from "@/types";
import { fetchStates } from "@/lib/fetchIbge";

const SearchStates = ({ state, setState }: SearchStatesProps) => {
  const [query, setQuery] = useState("");
  const [states, setStates] = useState<States>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statesResp = await fetchStates();
        setStates(statesResp);
      } catch (err) {
        console.log('Error occurred when fetching States');
      }
    };

    fetchData();
  }, []);


  const filteredStates =
    query === ""
      ? states
      : states?.filter((item) =>
        item.nome.toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      );

  return (
    <div className='search-city'>
      <Combobox value={state} onChange={setState} >
        <div className='relative w-full'>
          <Combobox.Input
            className='search-city__input'
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Estado...'
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
              {filteredStates?.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className='search-city__option'
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredStates?.map((item) => (
                  <Combobox.Option
                    key={item.id}
                    className={({ active }) =>
                      `relative search-city__option ${active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item.nome}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item.nome}
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

export default SearchStates;
