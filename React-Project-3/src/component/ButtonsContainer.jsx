export function ButtonsContainer() {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div id="btn-cont" className="mt-3">
        {buttonName.map((btn) => (
          <button type="button" class="btn btn-success" id="btnId">
            {btn}
          </button>
        ))}
      </div>
    </>
  );
}
