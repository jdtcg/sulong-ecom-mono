
import { redirect } from "next/navigation";

export default function Page() {
  // Server-side redirect from `/` to the design market page
  redirect("/design-market");
}
