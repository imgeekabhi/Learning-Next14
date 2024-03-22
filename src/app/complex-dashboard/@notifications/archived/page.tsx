import Card from "@/app/Components/Card";
import Link from "next/link";
import React from "react";

const Archived = () => {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href={`/complex-dashboard`}>Default</Link>
    </Card>
  );
};

export default Archived;
