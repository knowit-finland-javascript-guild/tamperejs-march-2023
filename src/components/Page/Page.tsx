import React, { PropsWithChildren } from "react";
import "./page.css";
import { LoadingSpinner } from "components/LoadingSpinner";

interface ErrorProps {
  /** Error message */
  errorText: string;
}

interface PageProps extends PropsWithChildren {
  /** Page header */
  header: string;
  /** Loading state */
  loading?: boolean;
  /** Error state */
  error?: ErrorProps;
}

export const Page = ({ header, children, loading, error }: PageProps) => {
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <section>
          <h2>{header}</h2>
          {error?.errorText ? <p style={{ color: "red" }}>Error</p> : <>{children}</>}
        </section>
      )}
    </>
  );
};
