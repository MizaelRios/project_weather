"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchStates from "./SearchState";
import { SearchBarProps, State } from "@/types";
import SearchCity from "./SearchCity";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={30}
      height={30}
      className='object-contain'
    />
  </button>
);

const SearchBar = ({ city, setCity }: SearchBarProps) => {
  const [state, setState] = useState<State>();

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state?.nome.trim() === "" && city?.nome.trim() === "") {
      return alert("Por favor inserir informações necessárias para a consulta!");
    }

    updateSearchParams(city?.nome.toLowerCase() ?? "", state?.nome.toLowerCase() ?? "");
  };

  const updateSearchParams = (state: string, city: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (state) {
      searchParams.set("state", state);
    } else {
      searchParams.delete("state");
    }

    if (city) {
      searchParams.set("city", city);
    } else {
      searchParams.delete("city");
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        {<SearchStates
          stateSelected={state}
          setState={setState}
        />}
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        {<SearchCity
          uf={state?.sigla.trim() ?? ""}
          citySelected={city}
          setCity={setCity}
        />}
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
