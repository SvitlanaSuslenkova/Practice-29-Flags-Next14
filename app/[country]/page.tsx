"use client";
import Card from "../components/Card/Card";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Button from "../components/Button/Button";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import styles from "../pageOneCountry.module.css";
import { Suspense } from "react";

function CountryDetails({ params }: { params: { country: string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  function goBack() {
    const query = searchParams.toString();
    router.push(`/?${query}`);
    //router.back();
  }
  return (
    <>
      <div className={styles.pageOneCountry}>
        <div className={styles.CountryDiv}>
          <Suspense>
            <Button onClick={() => goBack()}>
              <HiOutlineArrowLeft /> Back
            </Button>
          </Suspense>
          <Card params={params} />
        </div>
      </div>
    </>
  );
}
export default CountryDetails;
