import Subcontent from "./Subconten";
import Advertisment from "./Advertisment";

const Main = () => {
  return (
    <div id="main">
      <div>
        <Subcontent />
        <Subcontent />
        <Subcontent />
      </div>
      <Advertisment />
    </div>
  );
};

export default Main;
