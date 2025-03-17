import Image from "next/image";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import styles from "./page.module.css";
import CarPanel from "@/components/CarPanel";
import TravelCard from "@/components/TravelCard";

export default function Home() {
  return (
    <main>
      <Banner/>
      <TravelCard/>
    </main>
  );
}
