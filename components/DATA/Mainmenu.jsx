export function Mainmenu({ items }) {
  return (
    <>
      <div className="hidden md:flex items-center justify-center flex-1 gap-10 ">
        {items.map((item) => (
          <a key={item.id} className="px-2 py4" href={items.link}>
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
