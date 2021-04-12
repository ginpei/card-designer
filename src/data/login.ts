import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { useEffect, useState } from "react";

// TODO find type
export interface UnknownAwsUser {
  attributes: {
    email: string;
  };
}

export function useAuth(): [UnknownAwsUser | null, AuthState | null] {
  const [user, setUser] = useState<UnknownAwsUser | null>(null);
  const [state, setState] = useState<AuthState | null>(null);

  useEffect(() => {
    return onAuthUIStateChange((newState, newUser) => {
      setUser(isUnknownAwsUser(newUser) ? newUser : null);
      setState(newState);
    });
  }, []);

  return [user, state];
}

export function isUnknownAwsUser(user: unknown): user is UnknownAwsUser {
  if (typeof user !== "object" || user === null) {
    return false;
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "attributes" in user && typeof (user as any).attributes.email === "string"
  );
}
