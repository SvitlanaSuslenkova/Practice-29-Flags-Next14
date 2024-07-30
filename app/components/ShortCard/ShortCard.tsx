"use client";
import React from "react";
import Link from "next/link";
import styles from "./ShortCard.module.css";
import { IShortCard } from "../Types";
import Image from "next/image";
import { IFlags } from "../Types";

const ShortCard: React.FC<IShortCard> = ({
  filteredregion,
  nameFilter,
  ...country
}): JSX.Element => {
  const data: IFlags = country as IFlags;
  const capitals = data.capital ? Object.values(data.capital).join(", ") : null;
  return (
    <>
      {data && (
        <Link
          href={{
            pathname: data.name.common,
            query: { nameFilter, filteredregion },
          }}
          className={styles.shortCardDivLink}
        >
          <div className={styles.shortCardDiv}>
            <div className={styles.cardImageDiv}>
              <Image
                className={styles.cardImage}
                src={data.flags.svg}
                alt={`Flag of ${data.name.common}`}
                fill
                loading="lazy"
              />
            </div>
            <div className={styles.cardTextDiv}>
              <p className={styles.infoCountry}>
                {data.name.common ?? "no name"}
              </p>
              <p className={styles.infoP}>
                Population:{" "}
                <span>
                  {data.population
                    ? data.population.toLocaleString()
                    : "no information"}
                </span>
              </p>
              <p className={styles.infoP}>
                Region: <span>{data.region ?? "no information"}</span>
              </p>
              <p className={styles.infoP}>
                Capital: <span>{capitals ?? "no capital"}</span>
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default ShortCard;
