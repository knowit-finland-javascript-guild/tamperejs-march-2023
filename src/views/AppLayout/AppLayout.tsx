import React from "react";
import "./appLayout.css";

import { Header, User } from "components/Header";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import { WelcomePage } from "views/WelcomePage";

export interface AppLayoutProps {
  /** Loading state */
  loading?: boolean;
}

export const AppLayout = ({ loading = false }: AppLayoutProps) => {
  const [user, setUser] = React.useState<User>();

  return (
    <>
      {/* TODO: Oh, each page has own header? Not very practical? */}
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <WelcomePage />
        </>
      )}
    </>
  );
};
