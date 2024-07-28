"use client";
import React from "react";
import { useEffect, useState } from "react";
import { IFlags } from "../../Types";
import { fetchDataByCCA3 } from "../../../apiData";
import Link from "next/link";

import Button from "../../Button/Button";
// data = cca3
interface IBorderCountries {
  data: string | null;
}
export default function BorderCountries({ data }: IBorderCountries) {
  const [dataCountry, setDataCountry] = useState<IFlags | null>(null);
  useEffect(() => {
    async function fetchData(data: string) {
      const gotdataCountry: IFlags[] = await fetchDataByCCA3(data);
      setDataCountry(gotdataCountry[0]);
    }
    if (data) {
      fetchData(data);
    }
  }, [data]);
  return (
    <>
      {dataCountry && (
        <Link href={`/${dataCountry.name.common}`}>
          <Button>{dataCountry.name.common}</Button>
        </Link>
      )}
    </>
  );
}
