export function Sample() {
  const click = () => {
    console.log("click");
  };

  return (
    <div
      className="rs-cursor-pointer"
      onClick={() => {
        click();
      }}
    >
      <h1 className="rs-text-3xl rs-text-purple-400 rs-font-bold rs-underline">
        Hello world!
      </h1>
    </div>
  );
}
