"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";

const ProfilePage = () => {
  const { data: session } = useSession();

  if (session) {
    console.log(session);
  }

  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default ProfilePage;
