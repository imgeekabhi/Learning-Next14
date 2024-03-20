const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};
export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error(`Error Loading product`);
  }
  return (
    <>
      {children}
      <h2>Features Product</h2>
    </>
  );
}
