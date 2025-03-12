import { NewsBridgeBiasScale, UserBiasScale } from "../../components/BiasScale";

function BiasScalePage() {
  const handleBiasUpdate = (rating: number) => {
    console.log(rating);
  };

  return (
    <div className="flex flex-col p-4 justify-between gap-5">
      <NewsBridgeBiasScale rating={10} />
      <UserBiasScale initialRating={50} onChange={handleBiasUpdate} />
      <UserBiasScale initialRating={50} onChange={handleBiasUpdate} />
      <UserBiasScale initialRating={50} onChange={handleBiasUpdate} />

      <UserBiasScale initialRating={50} onChange={handleBiasUpdate} />
    </div>
  );
}

export default BiasScalePage;
