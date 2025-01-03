import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import { useCities } from "../context/CitiesContext.jsx";

function CountriesList() {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your first countery by clicking on the map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map(el => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountriesList;
