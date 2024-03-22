import Link from "next/link";
import React from "react";

const F1Page = () => {
  return (
    <div>
      <div>F1 Page</div>
      <Link href={`/f1/f2`}>F2</Link>
    </div>
  );
};

export default F1Page;
