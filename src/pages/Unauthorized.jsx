import React from "react";

export default function Unauthorized() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold text-red-600">You are not authorized to view this page.</h2>
    </div>
  );
}
