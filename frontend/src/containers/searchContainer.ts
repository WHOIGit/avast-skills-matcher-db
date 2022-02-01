import * as React from "react";
import { createContainer } from "unstated-next";

type HookData = {
  searchTerms: string;
  setSearchTerms: React.Dispatch<React.SetStateAction<string>>;
};

function useSearch(): HookData {
  const [searchTerms, setSearchTerms] = React.useState("");

  return {
    searchTerms: searchTerms,
    setSearchTerms: setSearchTerms,
  };
}

const Search = createContainer(useSearch);
export default Search;
