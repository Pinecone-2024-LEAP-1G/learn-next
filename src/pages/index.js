import styles from "@/styles/Home.module.css";
import { Box, BoxGreenBackground } from "../components/box";
import Round from "../components/round";

export default function Page() {
  return (
    <div className={styles.app}>
      <Box />
      <Round />
      <Box />
      <Box />
      <Round />
      <Box />
      <BoxGreenBackground />
    </div>
  );
}
