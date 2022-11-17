import React from "react";

import { Button } from "components/Button";
import { Logo } from "components/Logo";
import "./header.css";

export interface User {
  name: string;
}

interface HeaderProps {
  user?: User;
  header?: string;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, header = "Acme", onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div>
        <Logo />
        <h1>{header}</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
