import React, { useState } from "react";

import { Page } from "../../components/Page/Page";
import { TextInput } from "components/TextInput/TextInput";
import { Button } from "components/Button";
import { LoadingSpinner } from "components/LoadingSpinner";

interface SignupPageWithStateProps {
  onSignup: (username: string, password: string) => void;
  error?: boolean;
  duplicateUsername?: boolean;
  loading?: boolean;
}

export const SignupPageWithState = ({ onSignup, error, duplicateUsername, loading = false }: SignupPageWithStateProps) => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const passwordsFilled = password1.length > 0 && password2.length > 0;
  const allFieldsFilled = passwordsFilled && username.length > 0;
  const passwordsMatch = passwordsFilled && password1 === password2;
  const isSignupEnabled = allFieldsFilled && passwordsMatch && !error && !duplicateUsername;

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Page header="Sign up now!">
          {duplicateUsername && <p>There already exists an user with that name</p>}
          <TextInput
            label="Username"
            id="username-input"
            value={username}
            onChange={setUsername}
            error={duplicateUsername}
            emoji={username.length > 0 ? "💖" : ""}
          />
          <TextInput
            type="password"
            label="Password"
            id="password1-input"
            value={password1}
            onChange={setPassword1}
            emoji={passwordsMatch ? "💝" : ""}
            error={!passwordsMatch && passwordsFilled}
          />
          <TextInput
            type="password"
            label="Repeat Password"
            id="password2-input"
            value={password2}
            onChange={setPassword2}
            emoji={passwordsMatch ? "💕" : ""}
            error={!passwordsMatch && passwordsFilled}
          />
          {!passwordsMatch && passwordsFilled && <p style={{ backgroundColor: "greenyellow" }}>Passwords do not match</p>}
          <Button label="Sign up" onClick={() => onSignup(username, password1)} disabled={!isSignupEnabled} primary={true} />
          {error && <p style={{ backgroundColor: "red" }}>Oh no something went wrong. Please try again later</p>}
        </Page>
      )}
    </>
  );
};
