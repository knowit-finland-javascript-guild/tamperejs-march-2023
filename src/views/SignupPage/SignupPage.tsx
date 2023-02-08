import React, { useState } from "react";

import { Page } from "../../components/Page/Page";
import { TextInput } from "components/TextInput/TextInput";
import { Button } from "components/Button";

interface SignupPageProps {
  onSignup: (username: string, password: string) => void;
  error?: boolean;
  duplicateUsername?: boolean;
}

export const SignupPage = ({ onSignup, error, duplicateUsername }: SignupPageProps) => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const allFieldsFilled = password1.length > 0 && password2.length > 0 && username.length > 0;
  const isSignupEnabled = allFieldsFilled && password1 === password2 && !error && !duplicateUsername;

  return (
    <Page header="Sign up now!">
      {duplicateUsername && <p>There already exists an user with that name</p>}
      <TextInput label="Username" id="username-input" value={username} onChange={setUsername} error={duplicateUsername} />
      <TextInput label="Password" id="password1-input" value={password1} onChange={setPassword1} />
      <TextInput label="Repeat Password" id="password2-input" value={password2} onChange={setPassword2} />
      <Button label="Sign up" onClick={() => onSignup(username, password1)} disabled={!isSignupEnabled} primary={true} />
      {error && <p style={{ backgroundColor: "red" }}>Oh no something went wrong. Please try again later</p>}
    </Page>
  );
};
