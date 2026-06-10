function Practice(): JSX.Element {
  function handleDoubleClick(): void {
    console.log("Double click");
  }

  return (
    <div>
      <button onDoubleClick={handleDoubleClick}>
        Click Here
      </button>
    </div>
  );
}

export default Practice;