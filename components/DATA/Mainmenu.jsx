export function Mainmenu({ items }) {
  return (
    <>
      <div className="flex flex-col p-2 md:flex items-center justify-center flex-1 gap-10 ">
        {items.map((item) => (
          <a key={item.id} className="px-2 py4 border-l-violet-200" href={item.link}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
