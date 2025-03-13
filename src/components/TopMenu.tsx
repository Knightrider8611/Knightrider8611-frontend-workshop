import Image from "next/image";
import styles from "./topmenu.module.css"
import TopMenuItem from "./TopMenuItem";
export default function TopMenu(){
    return (
        <div className = {styles.menucontainer}>
            <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo'
            width={0} height={0} sizes="100vh"/>
            <TopMenuItem title="Reservations" pageRef='/reservations'/>
            <TopMenuItem title="About" pageRef='/about'/>
        </div>
    );
}