import Link from "next/link";
import React from "react";

const F4Page = () => {
  return (
    <div>
      <div>F4 Page</div>
      <Link href={`/f1/f3`}>F3</Link>
      <br />
      <Link href={`/about`}>About</Link>
    </div>
  );
};

export default F4Page;
