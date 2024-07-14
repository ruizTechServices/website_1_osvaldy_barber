import React from 'react';

const HaircutPriceBoard = () => {
  const prices = {
    menHaircut: 20,
    womenHaircut: 30,
    kidsHaircut: 15,
    buzzCut: 10,
    crewCut: 12,
    shapeUp: 8,
    beardTrim: 7,
    fullBeardGrooming: 20,
    luxuryShave: 25,
    hairColoring: 50,
    highlights: 75,
    lowLights: 60,
    balayage: 100,
    ombre: 120,
    perm: 90,
    hairRelaxer: 85,
    hairExtensions: 200,
    wigInstallation: 150,
    hairReplacement: 250,
    scalpTreatment: 40
  };

  return (
    <div className="bg-white w-[500px] text-center py-20 rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Haircut Price Board</h1>
      <ul className="space-y-1">
        {Object.entries(prices).map(([item, price]) => (
          <li key={item} className="text-2xl">
            <span className="text-yellow-300 font-semibold capitalize">{item.replace(/([A-Z])/g, ' $1')}:</span> ${price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HaircutPriceBoard;