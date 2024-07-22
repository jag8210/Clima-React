import styles from "./App.module.css";
import Form from "./components/Form/Form";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";
import Alert from "./components/Alert/Alert";

function App() {


    const { weather, fetchWeather, hasWeatherdata, notFound } = useWeather()
    
    return (
        <>
            <h1 className={styles.title}>Buscador de Clima</h1>

            <div className={styles.container}>
                <Form fetchWeather={fetchWeather} />
                {hasWeatherdata && (
                    <WeatherDetail weather={weather} />
                )}
                {notFound && <Alert>Ciudad no encontrada</Alert>}
            </div>
        </>
    );
}

export default App;