const Btn = ({ btnName }) => {
  return (
    <div className="controls">
      <button type="button" className="btn-format">
        {btnName}
      </button>
    </div>
  );
};

export default Btn;
