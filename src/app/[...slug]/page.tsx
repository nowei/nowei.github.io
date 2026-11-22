import ClientApp from "../ClientApp";
import { spaStaticParams } from "../../lib/spaPaths";

export function generateStaticParams() {
  return spaStaticParams();
}

export default function SpaShellPage() {
  return <ClientApp />;
}