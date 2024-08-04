"use client";
import Card from "../components/Card/Card";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Button from "../components/Button/Button";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import styles from "../pageOneCountry.module.css";
import { Suspense } from "react";
import Loading from "../components/Loading/LoadingOneCountry";

function CountryDetails({ params }: { params: { country: string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  function goBack() {
    router.push(`/?${searchParams.toString()}`);
    //router.back();
    console.log(searchParams.toString());
  }
  return (
    <>
      <div className={styles.pageOneCountry}>
        <div className={styles.CountryDiv}>
          <Suspense fallback={<div>Loading...</div>}>
            <Button onClick={() => goBack()}>
              <HiOutlineArrowLeft /> Back
            </Button>
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Card params={params} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
export default CountryDetails;
