import ButtonBtn from "./../ButtonBtn/ButtonBtn";

const ProgressBtns = () => {
  return (
    <div className="flex items-center gap-8">
      {/* start/resume button */}
      <ButtonBtn text={"Start Working"} />

      {/* pause button */}
      <ButtonBtn text={"Clock Out"} colorTheme="danger" />
    </div>
  );
};

export default ProgressBtns;
