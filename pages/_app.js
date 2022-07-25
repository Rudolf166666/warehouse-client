import "../styles/globals.css";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import { Provider } from "react-redux";
import { store } from "../redux";
import { Navbar } from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NotificationContainer />
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
