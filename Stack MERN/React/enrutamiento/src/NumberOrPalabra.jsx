import { useParams } from "react-router-dom";

const NumberOrPalabra = () => {
  const { input } = useParams();

  return (
    <div>
      {isNaN(input) ? <h2>{input}</h2> : <h2>This number is: {input}</h2>}
    </div>
  );
};

export default NumberOrPalabra;
