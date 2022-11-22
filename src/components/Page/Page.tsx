import React, { PropsWithChildren } from "react";
import "./page.css";

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

export const Page = ({ header, children }: PageProps) => {
  return (
    <section>
      <h2>{header}</h2>
      <>{children}</>
    </section>
  );
};
