import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;

  return (
    <ul className={styles.cityList}>
      {cities.map(city => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;