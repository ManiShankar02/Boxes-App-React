const Box = (props) => {
  const { name ,className} = props;
  return (
    <div>className={`box ${className}`}>
      <p className = "Boxes">{name}</p>
    </div>;
  );
};

const element = (
  <div  className = "container">
      <h1 className = "head">Boxes</h1>
      <div className = "sub-container">
          <Box text = "Small" className = "box1"/>
          <Box text = "Medium" className = "box2"/>
          <Box text = "Large" className = "box3"/>
      </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
