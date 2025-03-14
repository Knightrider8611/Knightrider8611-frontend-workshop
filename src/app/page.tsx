import Image from "next/image";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import styles from "./page.module.css";
import CarPanel from "@/components/CarPanel";

export default function Home() {
  return (
    <main>
      <Banner/>
      <CarPanel/>
    </main>
  );
}
