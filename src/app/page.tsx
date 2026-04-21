import Chart from "../components/Chart";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Chart />
      <p className="text-red-500">Hello</p>
    </div>
  );
}
