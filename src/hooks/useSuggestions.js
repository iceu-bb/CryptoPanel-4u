import { useState, useEffect } from 'react';
import fuzzy from 'fuzzy';
import { debounce } from '../helpers/debounce';
import {
  getCoins,
  getTop100Coins,
  refreshData
} from '../services/localStorage';

/* useSuggestions Hook */
export const useSuggestions = searchString => {
  const [coinList, setCoinList] = useState([]);
  const [top100List, setTop100List] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // fetch Data if data exist
  useEffect(() => {
    localStorage.getItem('coins') && localStorage.getItem('top100')
      ? getCoins().then(data => setCoinList([...data])) &&
        getTop100Coins().then(data => setTop100List([...data]))
      : window.location.reload();
  }, []);

  // set suggestions
  useEffect(
    debounce(() => {
      if (coinList && coinList.length > 1) {
        // 1) fuzzy search by searchString
        const suggestionArrayInitial = fuzzy.filter(searchString, coinList);
        // 2) serch algorithm
        suggestionArrayInitial.forEach(el => {
          if (top100List.find(elem => elem === el.string)) {
            el.string.toLowerCase().startsWith(searchString.toLowerCase())
              ? (el.score = 100)
              : el.string.toLowerCase().includes(searchString.toLowerCase())
              ? (el.score = 80)
              : (el.score = 45);
            return;
          } else {
            el.string.toLowerCase().startsWith(searchString.toLowerCase())
              ? (el.score = 60)
              : el.string.toLowerCase().includes(searchString.toLowerCase())
              ? (el.score = 50)
              : (el.score = 10);
          }
        });
        // 3) sort by score, then map results to string
        const suggestionArray = suggestionArrayInitial
          .sort((a, b) => (a.score > b.score ? -1 : 1))
          .slice(0, 6)
          .map(result => result.string);

        // 4) set suggetions into state
        setSuggestions([...suggestionArray]);
      }
    }, 300),
    [searchString]
  );

  return { suggestions };
};
