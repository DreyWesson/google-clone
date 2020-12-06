import { useState, useEffect } from "react";
import { useQuery } from "react-query";
// import API_KEY from "./keys";

const useGoogleSearch = (term) => {
  const { REACT_APP_API_KEY } = process.env;

  const CONTEXT_KEY = "56c24077eec683537";
  const [data, setData] = useState(null);

  const fetchData = async (key, term) => {
    return fetch(
      `https://www.googleapis.com/customsearch/v1?key=${REACT_APP_API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
    ).then((res) => res.json());
  };
  // useQuery implementation for asynchronous data
  const getGoogleData = useQuery(["googleData", term], fetchData);
  const googleData = getGoogleData.data;
  useEffect(() => setData(googleData), [googleData]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     fetch(
  //       `https://www.googleapis.com/customsearch/v1?key=${REACT_APP_API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
  //     )
  //       .then((res) => res.json())
  //       .then((result) => setData(result));
  //   };
  //   fetchData();
  // }, [term]);
  return { data };
};

// function useGoogleSearch(term) {
//   const CONTEXT_KEY = "56c24077eec683537";
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       fetch(
//         `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
//       )
//         .then((res) => res.json())
//         .then((result) => setData(result));
//     };
//     fetchData();
//   }, [term]);
//   return { data };
// }

export default useGoogleSearch;
