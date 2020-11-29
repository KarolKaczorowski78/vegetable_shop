const weekendDays = [6, 5, 4];

export const getSupplyDate = () => {
  const today = new Date();
  const day = today.getDay();
  const hour = today.getHours();

  let output;

  if (weekendDays.includes(day)) {
    output = 'najbliższy dzień roboczy';
  } else if (hour < 20) {
    output = 'najbliższy dzień roboczy';
  } else {
    output = 'pojutrze';
  }

  return `Przewidywany dzień dostawy: ${output}`;
}