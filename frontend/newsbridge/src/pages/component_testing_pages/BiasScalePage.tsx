import { NewsBridgeBiasScale, UserBiasScale } from "../../components/BiasScale";

function BiasScalePage() {
  const handleBiasUpdate = (rating: number) => {
    console.log(rating);
  };

  return (
    <div className="flex flex-col p-4 justify-between gap-5">
      <NewsBridgeBiasScale rating={10} />
      <NewsBridgeBiasScale rating={80} />
      <UserBiasScale initialRating={50} onChange={handleBiasUpdate} />
      <UserBiasScale initialRating={50} onChange={handleBiasUpdate} />
      <UserBiasScale initialRating={50} onChange={handleBiasUpdate} />
      <div className="w-70">
        <UserBiasScale initialRating={50} onChange={handleBiasUpdate} />
      </div>
    </div>
  );
}

export default BiasScalePage;
