import { redirect } from "next/navigation";

// /portfolio abre o lado DEV por defeito
export default function Portfolio() {
  redirect("/portfolio/dev");
}
