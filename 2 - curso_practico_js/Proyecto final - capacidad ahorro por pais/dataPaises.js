const salariosColombia = [
  {
    salary: 500,
    fixedCost: 122.75,
    saving: 162.48,
  },
  {
    salary: 1500,
    fixedCost: 951.37,
    saving: 426.00,
  },
  {
    salary: 1800,
    fixedCost: 1141.18,
    saving: 282.38,
  },
  {
    salary: 1000,
    fixedCost: 902.98,
    saving: 30.03,
  },
  {
    salary: 2200,
    fixedCost: 575.32,
    saving: 870.65,
  },
  {
    salary: 200,
    fixedCost: 180.75,
    saving: 13.04,
  },
  {
    salary: 500,
    fixedCost: 351.77,
    saving: 39.99,
  },
  {
    salary: 1500,
    fixedCost: 687.99,
    saving: 695.56,
  },
  {
    salary: 1300,
    fixedCost: 578.97,
    saving: 61.66,
  },
  {
    salary: 2400,
    fixedCost: 2063.06,
    saving: 53.96,
  },
  {
    salary: 3400,
    fixedCost: 2848.46,
    saving: 78.14,
  },
  {
    salary: 400,
    fixedCost: 241.43,
    saving: 51.48,
  },
  {
    salary: 400,
    fixedCost: 62.40,
    saving: 143.30,
  },
  {
    salary: 400,
    fixedCost: 132.03,
    saving: 225.17,
  },
  {
    salary: 600,
    fixedCost: 195.78,
    saving: 79.37,
  },
  {
    salary: 1600,
    fixedCost: 494.00,
    saving: 729.70,
  },
  {
    salary: 2600,
    fixedCost: 382.49,
    saving: 1727.16,
  },
  {
    salary: 1000,
    fixedCost: 705.33,
    saving: 141.82,
  },
  {
    salary: 2000,
    fixedCost: 1367.46,
    saving: 304.83,
  },
  {
    salary: 100000000,
    fixedCost: 38854986.087,
    saving: 23990509.02,
  }
];

const salariosElSalvador = [
  {
    salary: 436,
    fixedCost: 203.16,
    saving: 285.08,
  },
  {
    salary: 731,
    fixedCost: 428.69,
    saving: 55.34,
  },
  {
    salary: 312,
    fixedCost: 95.83,
    saving: 171.41,
  },
  {
    salary: 1123,
    fixedCost: 674.15,
    saving: 256.78,
  },
  {
    salary: 1707,
    fixedCost: 873.95,
    saving: 483.58,
  },
  {
    salary: 510,
    fixedCost: 30.72,
    saving: 164.32,
  },
  {
    salary: 442,
    fixedCost: 108.43,
    saving: 186.26,
  },
  {
    salary: 761,
    fixedCost: 738.81,
    saving: 19.39,
  },
  {
    salary: 454,
    fixedCost: 433.38,
    saving: 0.97,
  },
  {
    salary: 379,
    fixedCost: 318.24,
    saving: 45.50,
  },
  {
    salary: 1126,
    fixedCost: 932.46,
    saving: 12.62,
  },
  {
    salary: 441,
    fixedCost: 270.74,
    saving: 66.39,
  },
  {
    salary: 777,
    fixedCost: 575.05,
    saving: 53.30,
  },
  {
    salary: 284,
    fixedCost: 67.59,
    saving: 81.51,
  },
  {
    salary: 275,
    fixedCost: 221.82,
    saving: 29.90,
  },
  {
    salary: 338,
    fixedCost: 246.58,
    saving: 44.70,
  },
  {
    salary: 837,
    fixedCost: 770.96,
    saving: 12.14,
  },
  {
    salary: 222,
    fixedCost: 166.16,
    saving: 54.54,
  },
  {
    salary: 1034,
    fixedCost: 267.89,
    saving: 332.78,
  },
  {
    salary: 8126646,
    fixedCost: 6532209.02,
    saving: 805731.89,
  }
];

const salariosPaises = {
  // mexico: salariosMexico,
  elsalvador: salariosElSalvador,
  colombia: salariosColombia,
};

const paisesArray = Object.keys( salariosPaises );


function generarAleatorios(){

  salariosColombia.forEach( elem => {

    const randomNumer = Math.random() * 1.5 * elem.salary;

    console.log(`${randomNumer}`)
  } )

}
