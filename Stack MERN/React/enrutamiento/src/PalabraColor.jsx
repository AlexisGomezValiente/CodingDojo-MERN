import { useParams } from "react-router-dom";

const PalabraColor = () => {
  const { palabra, colorPalabra, colorFondo } = useParams();

  return (
    <div>
      <h2 style={{ color: colorPalabra, backgroundColor: colorFondo }}>
        {palabra}
      </h2>
    </div>
  );
};

export default PalabraColor;