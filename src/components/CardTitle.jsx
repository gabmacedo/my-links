export function CardTitle({ value, children }) {
  return (
    <div className="flex items-center justify-center">
      <div className="text-white bg-zinc-900 p-1.5 pl-4 pr-4 border border-zinc-600 rounded-4xl flex gap-2 items-center justify-center">
          {children}
        <h2>
          {value.split(" ")[0]} <strong>{value.split(" ")[1]}</strong>
        </h2>
      </div>
    </div>
  );
}
