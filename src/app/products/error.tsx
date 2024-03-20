"use client";
import React from "react";

const ErrorBoundries = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      <h4>{error.message}</h4>
      <button onClick={reset}>Retry</button>
    </div>
  );
};

export default ErrorBoundries;
