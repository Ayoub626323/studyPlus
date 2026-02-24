import { PaiementContent } from "./PaiementContent";

const PACKS_LENGTH = 4;

export default function PaiementPage({
  searchParams,
}: {
  searchParams: { pack?: string };
}) {
  const packIndex = Math.min(
    Math.max(0, parseInt(searchParams?.pack ?? "0", 10)),
    PACKS_LENGTH - 1
  );

  return <PaiementContent packIndex={packIndex} />;
}
