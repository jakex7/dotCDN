import { useResource } from "../../hooks/useResource";
import { Image } from "../../components/Image";

import styles from "./style.module.css";
import { getFullDate } from "../../utils/date";
import React from "react";

export const App = () => {
  const data = useResource(window.location.pathname.slice(1));

  if (!data) return null;

  if (!data.public) return <p>Resource not found</p>;

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.logo}>Jakub Grzywacz</h1>
      </header>

      <div className={styles.infoContainer}>
        <span>{data.name}</span>
        <span>{getFullDate(data.createdAt)}</span>
      </div>

      {data?.type === "image" && <Image data={data} />}
    </div>
  );
};
