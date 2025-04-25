import { NewsBridgeBiasScale } from "../../components/BiasScale";

function BiasScalePage() {


  return (
    <div className="flex flex-col p-4 justify-between gap-5">
      <NewsBridgeBiasScale rating={10} />
      <NewsBridgeBiasScale rating={80} />
      </div>
  );
}

export default BiasScalePage;
