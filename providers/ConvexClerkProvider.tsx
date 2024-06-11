"use client";

import React, { ReactNode } from 'react';
import { ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const ConvexClerkProvider = () => {
  return (
    <div>ConvexClerkProvider</div>
  );
};

export default ConvexClerkProvider;