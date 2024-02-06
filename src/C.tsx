type Key = "name" | "address";

const x = {
  name: "Alice",
  address: "UK",
} as const satisfies Record<Key, string>;

const C = () => {
  return <div />;
};
