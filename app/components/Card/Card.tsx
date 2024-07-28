"use client";
import React from "react";
import { IFlags } from "../Types";
import styles from "./Card.module.css";
import Image from "next/image";
import BorderCountries from "./BorderCountries/BorderCountries";
import { Suspense, useEffect, useState } from "react";
import Loading from "../Loading/LoadingOneCountry";
import { fetchDataByName } from "../../apiData";

const Card = ({ params }: { params: { country: string } }): JSX.Element => {
  const [data, setData] = useState<IFlags>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOurData() {
      try {
        const gotdata: IFlags[] = await fetchDataByName(params.country);
        if (gotdata) {
          setData(gotdata[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
      }
    }
    fetchOurData();
  }, []);

  if (!data) {
    return <Loading />;
  }

  const languageForName: string | undefined = data.languages
    ? Object.keys(data.languages)[0]
    : undefined;
  const nativename: string | undefined = languageForName
    ? data.name.nativeName[languageForName]?.common
    : undefined;
  const currency = data.currencies
    ? Object.keys(data.currencies)[0]
    : undefined;
  const languageNames = data.languages
    ? Object.values(data.languages).reverse().join(", ")
    : undefined;
  const borders: string[] | null = data.borders;
  const capitals = data.capital
    ? Object.values(data.capital).join(", ")
    : undefined;

  return (
    <Suspense fallback={<Loading />}>
      {error && (
        <p style={{ color: "red", marginTop: "80px", fontSize: "20px" }}>
          {error}
        </p>
      )}
      {data && (
        <div className={styles.cardDiv}>
          <div className={styles.cardImageDiv}>
            <Image
              className={styles.cardImage}
              src={data.flags.svg}
              alt={`Flag of ${data.name.common}`}
              fill
              loading="lazy"
            />
          </div>
          <article className={styles.articleOne}>
            <p className={styles.infoCommonName}>
              {data.name.common ?? "no information"}
            </p>
            <p className={styles.infoP}>
              Native Name: <span>{nativename ?? "no native name"}</span>
            </p>
            <p className={styles.infoP}>
              Population:{" "}
              <span>
                {data.population.toLocaleString() ?? "no information"}
              </span>
            </p>
            <p className={styles.infoP}>
              Region: <span>{data.region ?? "no information"}</span>
            </p>
            <p className={styles.infoP}>
              Sub Region: <span>{data.subregion ?? "no information"}</span>
            </p>
            <p className={styles.infoP}>
              Capital: <span>{capitals ?? "no capital"}</span>
            </p>
          </article>
          <article className={styles.articleTwo}>
            <p className={styles.infoP}>
              Top Level Domain: <span>{data.tld ?? "no information"}</span>
            </p>
            <p className={styles.infoP}>
              Currencies:{" "}
              <span>
                {currency ? data.currencies[currency].name : "no currencies"}
              </span>{" "}
            </p>
            <p className={styles.infoP}>
              Languages: <span>{languageNames ?? "no information"}</span>
            </p>
          </article>
          <article className={styles.articleThree}>
            <p>Border Countries:</p>
            <article className={styles.articleThree}>
              {borders ? (
                <div className={styles.borderCountriesDiv}>
                  {borders.map((border) => (
                    <BorderCountries key={border} data={border} />
                  ))}
                </div>
              ) : (
                <p>No border countries</p>
              )}
            </article>
          </article>
        </div>
      )}
    </Suspense>
  );
};

export default Card;
