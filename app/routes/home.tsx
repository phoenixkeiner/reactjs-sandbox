import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Navbar } from "../components/navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Sandbox" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
      <div className="bg-stone-400">
        <Navbar />
        <Welcome />
      </div>
  );
}