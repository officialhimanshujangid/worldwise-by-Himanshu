import Map from "../components/Map";
import SideBar from "../components/SideBar";
import User from "../components/User";
import styles from "./APPLayout.module.css";
function APPLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default APPLayout;
