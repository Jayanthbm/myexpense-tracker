const PORT = process.env.PORT || 6000;
const express = require("express");
const cors = require("cors");
var axios = require("axios");
var FormData = require("form-data");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World From Expense Tracker!");
});

app.get("/api/v1/expenses", async (req, res) => {
  try {
    const url = "https://docs.google.com/spreadsheets/d/";
    const ssid = "103KGBPyCbLzKuVCdOlaVV733kW8_3WgEqyi6dcJvDdM";
    const gid = "1355604944";
    const query1 = `/gviz/tq?`;
    const endpoint1 = `${url}${ssid}${query1}gid=${gid}`;
    let result = await axios.get(endpoint1);
    let tmp = result.data;
    const temp = tmp.substr(47).slice(0, -2);
    const json = JSON.parse(temp);

    const TOTAL_EXP = json.table.rows[12].c[10].v;
    const TOTAL_INCOME = json.table.rows[12].c[11].v;
    const TOTAL_SAVINGS = json.table.rows[12].c[12].v;

    const TOTAL_EXP_FOOD = json.table.rows[12].c[1].v;
    const TOTAL_EXP_FUEL = json.table.rows[12].c[2].v;
    const TOTAL_EXP_BILLS = json.table.rows[12].c[3].v;
    const TOTAL_EXP_TRANSPORTATION = json.table.rows[12].c[4].v;
    const TOTAL_EXP_HEALTH = json.table.rows[12].c[5].v;
    const TOTAL_EXP_HOUSEHOLD = json.table.rows[12].c[6].v;
    const TOTAL_EXP_RENT = json.table.rows[12].c[7].v;
    const TOTAL_EXP_LOANS = json.table.rows[12].c[8].v;
    const TOTAL_EXP_OTHERS = json.table.rows[12].c[9].v;

    const JAN_TOTAL_EXP = json.table.rows[0].c[10].v;
    const JAN_TOTAL_INCOME = json.table.rows[0].c[11].v;
    const JAN_TOTAL_SAVINGS = json.table.rows[0].c[12].v;

    const JAN_TOTAL_EXP_FOOD = json.table.rows[0].c[1].v;
    const JAN_TOTAL_EXP_FUEL = json.table.rows[0].c[2].v;
    const JAN_TOTAL_EXP_BILLS = json.table.rows[0].c[3].v;
    const JAN_TOTAL_EXP_TRANSPORTATION = json.table.rows[0].c[4].v;
    const JAN_TOTAL_EXP_HEALTH = json.table.rows[0].c[5].v;
    const JAN_TOTAL_EXP_HOUSEHOLD = json.table.rows[0].c[6].v;
    const JAN_TOTAL_EXP_RENT = json.table.rows[0].c[7].v;
    const JAN_TOTAL_EXP_LOANS = json.table.rows[0].c[8].v;
    const JAN_TOTAL_EXP_OTHERS = json.table.rows[0].c[9].v;

    const FEB_TOTAL_EXP = json.table.rows[1].c[10].v;
    const FEB_TOTAL_INCOME = json.table.rows[1].c[11].v;
    const FEB_TOTAL_SAVINGS = json.table.rows[1].c[12].v;

    const FEB_TOTAL_EXP_FOOD = json.table.rows[1].c[1].v;
    const FEB_TOTAL_EXP_FUEL = json.table.rows[1].c[2].v;
    const FEB_TOTAL_EXP_BILLS = json.table.rows[1].c[3].v;
    const FEB_TOTAL_EXP_TRANSPORTATION = json.table.rows[1].c[4].v;
    const FEB_TOTAL_EXP_HEALTH = json.table.rows[1].c[5].v;
    const FEB_TOTAL_EXP_HOUSEHOLD = json.table.rows[1].c[6].v;
    const FEB_TOTAL_EXP_RENT = json.table.rows[1].c[7].v;
    const FEB_TOTAL_EXP_LOANS = json.table.rows[1].c[8].v;
    const FEB_TOTAL_EXP_OTHERS = json.table.rows[1].c[9].v;

    const MAR_TOTAL_EXP = json.table.rows[2].c[10].v;
    const MAR_TOTAL_INCOME = json.table.rows[2].c[11].v;
    const MAR_TOTAL_SAVINGS = json.table.rows[2].c[12].v;

    const MAR_TOTAL_EXP_FOOD = json.table.rows[2].c[1].v;
    const MAR_TOTAL_EXP_FUEL = json.table.rows[2].c[2].v;
    const MAR_TOTAL_EXP_BILLS = json.table.rows[2].c[3].v;
    const MAR_TOTAL_EXP_TRANSPORTATION = json.table.rows[2].c[4].v;
    const MAR_TOTAL_EXP_HEALTH = json.table.rows[2].c[5].v;
    const MAR_TOTAL_EXP_HOUSEHOLD = json.table.rows[2].c[6].v;
    const MAR_TOTAL_EXP_RENT = json.table.rows[2].c[7].v;
    const MAR_TOTAL_EXP_LOANS = json.table.rows[2].c[8].v;
    const MAR_TOTAL_EXP_OTHERS = json.table.rows[2].c[9].v;

    const APR_TOTAL_EXP = json.table.rows[3].c[10].v;
    const APR_TOTAL_INCOME = json.table.rows[3].c[11].v;
    const APR_TOTAL_SAVINGS = json.table.rows[3].c[12].v;

    const APR_TOTAL_EXP_FOOD = json.table.rows[3].c[1].v;
    const APR_TOTAL_EXP_FUEL = json.table.rows[3].c[2].v;
    const APR_TOTAL_EXP_BILLS = json.table.rows[3].c[3].v;
    const APR_TOTAL_EXP_TRANSPORTATION = json.table.rows[3].c[4].v;
    const APR_TOTAL_EXP_HEALTH = json.table.rows[3].c[5].v;
    const APR_TOTAL_EXP_HOUSEHOLD = json.table.rows[3].c[6].v;
    const APR_TOTAL_EXP_RENT = json.table.rows[3].c[7].v;
    const APR_TOTAL_EXP_LOANS = json.table.rows[3].c[8].v;
    const APR_TOTAL_EXP_OTHERS = json.table.rows[3].c[9].v;

    const MAY_TOTAL_EXP = json.table.rows[4].c[10].v;
    const MAY_TOTAL_INCOME = json.table.rows[4].c[11].v;
    const MAY_TOTAL_SAVINGS = json.table.rows[4].c[12].v;

    const MAY_TOTAL_EXP_FOOD = json.table.rows[4].c[1].v;
    const MAY_TOTAL_EXP_FUEL = json.table.rows[4].c[2].v;
    const MAY_TOTAL_EXP_BILLS = json.table.rows[4].c[3].v;
    const MAY_TOTAL_EXP_TRANSPORTATION = json.table.rows[4].c[4].v;
    const MAY_TOTAL_EXP_HEALTH = json.table.rows[4].c[5].v;
    const MAY_TOTAL_EXP_HOUSEHOLD = json.table.rows[4].c[6].v;
    const MAY_TOTAL_EXP_RENT = json.table.rows[4].c[7].v;
    const MAY_TOTAL_EXP_LOANS = json.table.rows[4].c[8].v;
    const MAY_TOTAL_EXP_OTHERS = json.table.rows[4].c[9].v;

    const JUN_TOTAL_EXP = json.table.rows[5].c[10].v;
    const JUN_TOTAL_INCOME = json.table.rows[5].c[11].v;
    const JUN_TOTAL_SAVINGS = json.table.rows[5].c[12].v;

    const JUN_TOTAL_EXP_FOOD = json.table.rows[5].c[1].v;
    const JUN_TOTAL_EXP_FUEL = json.table.rows[5].c[2].v;
    const JUN_TOTAL_EXP_BILLS = json.table.rows[5].c[3].v;
    const JUN_TOTAL_EXP_TRANSPORTATION = json.table.rows[5].c[4].v;
    const JUN_TOTAL_EXP_HEALTH = json.table.rows[5].c[5].v;
    const JUN_TOTAL_EXP_HOUSEHOLD = json.table.rows[5].c[6].v;
    const JUN_TOTAL_EXP_RENT = json.table.rows[5].c[7].v;
    const JUN_TOTAL_EXP_LOANS = json.table.rows[5].c[8].v;
    const JUN_TOTAL_EXP_OTHERS = json.table.rows[5].c[9].v;

    const JUL_TOTAL_EXP = json.table.rows[6].c[10].v;
    const JUL_TOTAL_INCOME = json.table.rows[6].c[11].v;
    const JUL_TOTAL_SAVINGS = json.table.rows[6].c[12].v;

    const JUL_TOTAL_EXP_FOOD = json.table.rows[6].c[1].v;
    const JUL_TOTAL_EXP_FUEL = json.table.rows[6].c[2].v;
    const JUL_TOTAL_EXP_BILLS = json.table.rows[6].c[3].v;
    const JUL_TOTAL_EXP_TRANSPORTATION = json.table.rows[6].c[4].v;
    const JUL_TOTAL_EXP_HEALTH = json.table.rows[6].c[5].v;
    const JUL_TOTAL_EXP_HOUSEHOLD = json.table.rows[6].c[6].v;
    const JUL_TOTAL_EXP_RENT = json.table.rows[6].c[7].v;
    const JUL_TOTAL_EXP_LOANS = json.table.rows[6].c[8].v;
    const JUL_TOTAL_EXP_OTHERS = json.table.rows[6].c[9].v;

    const AUG_TOTAL_EXP = json.table.rows[7].c[10].v;
    const AUG_TOTAL_INCOME = json.table.rows[7].c[11].v;
    const AUG_TOTAL_SAVINGS = json.table.rows[7].c[12].v;

    const AUG_TOTAL_EXP_FOOD = json.table.rows[7].c[1].v;
    const AUG_TOTAL_EXP_FUEL = json.table.rows[7].c[2].v;
    const AUG_TOTAL_EXP_BILLS = json.table.rows[7].c[3].v;
    const AUG_TOTAL_EXP_TRANSPORTATION = json.table.rows[7].c[4].v;
    const AUG_TOTAL_EXP_HEALTH = json.table.rows[7].c[5].v;
    const AUG_TOTAL_EXP_HOUSEHOLD = json.table.rows[7].c[6].v;
    const AUG_TOTAL_EXP_RENT = json.table.rows[7].c[7].v;
    const AUG_TOTAL_EXP_LOANS = json.table.rows[7].c[8].v;
    const AUG_TOTAL_EXP_OTHERS = json.table.rows[7].c[9].v;

    const SEP_TOTAL_EXP = json.table.rows[8].c[10].v;
    const SEP_TOTAL_INCOME = json.table.rows[8].c[11].v;
    const SEP_TOTAL_SAVINGS = json.table.rows[8].c[12].v;

    const SEP_TOTAL_EXP_FOOD = json.table.rows[8].c[1].v;
    const SEP_TOTAL_EXP_FUEL = json.table.rows[8].c[2].v;
    const SEP_TOTAL_EXP_BILLS = json.table.rows[8].c[3].v;
    const SEP_TOTAL_EXP_TRANSPORTATION = json.table.rows[8].c[4].v;
    const SEP_TOTAL_EXP_HEALTH = json.table.rows[8].c[5].v;
    const SEP_TOTAL_EXP_HOUSEHOLD = json.table.rows[8].c[6].v;
    const SEP_TOTAL_EXP_RENT = json.table.rows[8].c[7].v;
    const SEP_TOTAL_EXP_LOANS = json.table.rows[8].c[8].v;
    const SEP_TOTAL_EXP_OTHERS = json.table.rows[8].c[9].v;

    const OCT_TOTAL_EXP = json.table.rows[9].c[10].v;
    const OCT_TOTAL_INCOME = json.table.rows[9].c[11].v;
    const OCT_TOTAL_SAVINGS = json.table.rows[9].c[12].v;

    const OCT_TOTAL_EXP_FOOD = json.table.rows[9].c[1].v;
    const OCT_TOTAL_EXP_FUEL = json.table.rows[9].c[2].v;
    const OCT_TOTAL_EXP_BILLS = json.table.rows[9].c[3].v;
    const OCT_TOTAL_EXP_TRANSPORTATION = json.table.rows[9].c[4].v;
    const OCT_TOTAL_EXP_HEALTH = json.table.rows[9].c[5].v;
    const OCT_TOTAL_EXP_HOUSEHOLD = json.table.rows[9].c[6].v;
    const OCT_TOTAL_EXP_RENT = json.table.rows[9].c[7].v;
    const OCT_TOTAL_EXP_LOANS = json.table.rows[9].c[8].v;
    const OCT_TOTAL_EXP_OTHERS = json.table.rows[9].c[9].v;

    const NOV_TOTAL_EXP = json.table.rows[10].c[10].v;
    const NOV_TOTAL_INCOME = json.table.rows[10].c[11].v;
    const NOV_TOTAL_SAVINGS = json.table.rows[10].c[12].v;

    const NOV_TOTAL_EXP_FOOD = json.table.rows[10].c[1].v;
    const NOV_TOTAL_EXP_FUEL = json.table.rows[10].c[2].v;
    const NOV_TOTAL_EXP_BILLS = json.table.rows[10].c[3].v;
    const NOV_TOTAL_EXP_TRANSPORTATION = json.table.rows[10].c[4].v;
    const NOV_TOTAL_EXP_HEALTH = json.table.rows[10].c[5].v;
    const NOV_TOTAL_EXP_HOUSEHOLD = json.table.rows[10].c[6].v;
    const NOV_TOTAL_EXP_RENT = json.table.rows[10].c[7].v;
    const NOV_TOTAL_EXP_LOANS = json.table.rows[10].c[8].v;
    const NOV_TOTAL_EXP_OTHERS = json.table.rows[10].c[9].v;

    const DEC_TOTAL_EXP = json.table.rows[11].c[10].v;
    const DEC_TOTAL_INCOME = json.table.rows[11].c[11].v;
    const DEC_TOTAL_SAVINGS = json.table.rows[11].c[12].v;

    const DEC_TOTAL_EXP_FOOD = json.table.rows[11].c[1].v;
    const DEC_TOTAL_EXP_FUEL = json.table.rows[11].c[2].v;
    const DEC_TOTAL_EXP_BILLS = json.table.rows[11].c[3].v;
    const DEC_TOTAL_EXP_TRANSPORTATION = json.table.rows[11].c[4].v;
    const DEC_TOTAL_EXP_HEALTH = json.table.rows[11].c[5].v;
    const DEC_TOTAL_EXP_HOUSEHOLD = json.table.rows[11].c[6].v;
    const DEC_TOTAL_EXP_RENT = json.table.rows[11].c[7].v;
    const DEC_TOTAL_EXP_LOANS = json.table.rows[11].c[8].v;
    const DEC_TOTAL_EXP_OTHERS = json.table.rows[11].c[9].v;

    res.send({
      totalExpenses: TOTAL_EXP,
      totalIncome: TOTAL_INCOME,
      totalSavings: TOTAL_SAVINGS,
      totalExpensesByCategory: {
        food: TOTAL_EXP_FOOD,
        fuel: TOTAL_EXP_FUEL,
        bills: TOTAL_EXP_BILLS,
        transportation: TOTAL_EXP_TRANSPORTATION,
        health: TOTAL_EXP_HEALTH,
        household: TOTAL_EXP_HOUSEHOLD,
        rent: TOTAL_EXP_RENT,
        loans: TOTAL_EXP_LOANS,
        others: TOTAL_EXP_OTHERS,
      },
      totalIncomeByCategory: {},
      byMonth: [
        {
          January: {
            totalExpenses: JAN_TOTAL_EXP,
            totalIncome: JAN_TOTAL_INCOME,
            totalSavings: JAN_TOTAL_SAVINGS,
            totalExpensesByCategory: {
              food: JAN_TOTAL_EXP_FOOD,
              fuel: JAN_TOTAL_EXP_FUEL,
              bills: JAN_TOTAL_EXP_BILLS,
              transportation: JAN_TOTAL_EXP_TRANSPORTATION,
              health: JAN_TOTAL_EXP_HEALTH,
              household: JAN_TOTAL_EXP_HOUSEHOLD,
              rent: JAN_TOTAL_EXP_RENT,
              loans: JAN_TOTAL_EXP_LOANS,
              others: JAN_TOTAL_EXP_OTHERS,
            },
            totalIncomeByCategory: {},
          },
          February: {
            totalExpenses: FEB_TOTAL_EXP,
            totalIncome: FEB_TOTAL_INCOME,
            totalSavings: FEB_TOTAL_SAVINGS,
            totalExpensesByCategory: {
              food: FEB_TOTAL_EXP_FOOD,
              fuel: FEB_TOTAL_EXP_FUEL,
              bills: FEB_TOTAL_EXP_BILLS,
              transportation: FEB_TOTAL_EXP_TRANSPORTATION,
              health: FEB_TOTAL_EXP_HEALTH,
              household: FEB_TOTAL_EXP_HOUSEHOLD,
              rent: FEB_TOTAL_EXP_RENT,
              loans: FEB_TOTAL_EXP_LOANS,
              others: FEB_TOTAL_EXP_OTHERS,
            },
            totalIncomeByCategory: {},
          },
          March: {
            totalExpenses: MAR_TOTAL_EXP,
            totalIncome: MAR_TOTAL_INCOME,
            totalSavings: MAR_TOTAL_SAVINGS,
            totalExpensesByCategory: {
              food: MAR_TOTAL_EXP_FOOD,
              fuel: MAR_TOTAL_EXP_FUEL,
              bills: MAR_TOTAL_EXP_BILLS,
              transportation: MAR_TOTAL_EXP_TRANSPORTATION,
              health: MAR_TOTAL_EXP_HEALTH,
              household: MAR_TOTAL_EXP_HOUSEHOLD,
              rent: MAR_TOTAL_EXP_RENT,
              loans: MAR_TOTAL_EXP_LOANS,
              others: MAR_TOTAL_EXP_OTHERS,
            },
            totalIncomeByCategory: {},
          },
          April: {
            totalExpenses: APR_TOTAL_EXP,
            totalIncome: APR_TOTAL_INCOME,
            totalSavings: APR_TOTAL_SAVINGS,
            totalExpensesByCategory: {
              food: APR_TOTAL_EXP_FOOD,
              fuel: APR_TOTAL_EXP_FUEL,
              bills: APR_TOTAL_EXP_BILLS,
              transportation: APR_TOTAL_EXP_TRANSPORTATION,
              health: APR_TOTAL_EXP_HEALTH,
              household: APR_TOTAL_EXP_HOUSEHOLD,
              rent: APR_TOTAL_EXP_RENT,
              loans: APR_TOTAL_EXP_LOANS,
              others: APR_TOTAL_EXP_OTHERS,
            },
            totalIncomeByCategory: {},
          },
          May: {
            totalExpenses: MAY_TOTAL_EXP,
            totalIncome: MAY_TOTAL_INCOME,
            totalSavings: MAY_TOTAL_SAVINGS,
            totalExpensesByCategory: {
              food: MAY_TOTAL_EXP_FOOD,
              fuel: MAY_TOTAL_EXP_FUEL,
              bills: MAY_TOTAL_EXP_BILLS,
              transportation: MAY_TOTAL_EXP_TRANSPORTATION,
              health: MAY_TOTAL_EXP_HEALTH,
              household: MAY_TOTAL_EXP_HOUSEHOLD,
              rent: MAY_TOTAL_EXP_RENT,
              loans: MAY_TOTAL_EXP_LOANS,
              others: MAY_TOTAL_EXP_OTHERS,
            },
            totalIncomeByCategory: {},
          },
          June: {
            totalExpenses: JUN_TOTAL_EXP,
            totalIncome: JUN_TOTAL_INCOME,
            totalSavings: JUN_TOTAL_SAVINGS,
            totalExpensesByCategory: {
              food: JUN_TOTAL_EXP_FOOD,
              fuel: JUN_TOTAL_EXP_FUEL,
              bills: JUN_TOTAL_EXP_BILLS,
              transportation: JUN_TOTAL_EXP_TRANSPORTATION,
              health: JUN_TOTAL_EXP_HEALTH,
              household: JUN_TOTAL_EXP_HOUSEHOLD,
              rent: JUN_TOTAL_EXP_RENT,
              loans: JUN_TOTAL_EXP_LOANS,
              others: JUN_TOTAL_EXP_OTHERS,
            },
            totalIncomeByCategory: {},
          },
          July: {
            totalExpenses: JUL_TOTAL_EXP,
            totalIncome: JUL_TOTAL_INCOME,
            totalSavings: JUL_TOTAL_SAVINGS,
            totalExpensesByCategory: {
              food: JUL_TOTAL_EXP_FOOD,
              fuel: JUL_TOTAL_EXP_FUEL,
              bills: JUL_TOTAL_EXP_BILLS,
              transportation: JUL_TOTAL_EXP_TRANSPORTATION,
              health: JUL_TOTAL_EXP_HEALTH,
              household: JUL_TOTAL_EXP_HOUSEHOLD,
              rent: JUL_TOTAL_EXP_RENT,
              loans: JUL_TOTAL_EXP_LOANS,
              others: JUL_TOTAL_EXP_OTHERS,
            },
            totalIncomeByCategory: {},
          },
          August: {
            totalExpenses: AUG_TOTAL_EXP,
            totalIncome: AUG_TOTAL_INCOME,
            totalSavings: AUG_TOTAL_SAVINGS,
            totalExpensesByCategory: {
              food: AUG_TOTAL_EXP_FOOD,
              fuel: AUG_TOTAL_EXP_FUEL,
              bills: AUG_TOTAL_EXP_BILLS,
              transportation: AUG_TOTAL_EXP_TRANSPORTATION,
              health: AUG_TOTAL_EXP_HEALTH,
              household: AUG_TOTAL_EXP_HOUSEHOLD,
              rent: AUG_TOTAL_EXP_RENT,
              loans: AUG_TOTAL_EXP_LOANS,
              others: AUG_TOTAL_EXP_OTHERS,
            },
            totalIncomeByCategory: {},
          },
          September: {
            totalExpenses: SEP_TOTAL_EXP,
            totalIncome: SEP_TOTAL_INCOME,
            totalSavings: SEP_TOTAL_SAVINGS,
            totalExpensesByCategory: {
              food: SEP_TOTAL_EXP_FOOD,
              fuel: SEP_TOTAL_EXP_FUEL,
              bills: SEP_TOTAL_EXP_BILLS,
              transportation: SEP_TOTAL_EXP_TRANSPORTATION,
              health: SEP_TOTAL_EXP_HEALTH,
              household: SEP_TOTAL_EXP_HOUSEHOLD,
              rent: SEP_TOTAL_EXP_RENT,
              loans: SEP_TOTAL_EXP_LOANS,
              others: SEP_TOTAL_EXP_OTHERS,
            },
            totalIncomeByCategory: {},
          },
          October: {
            totalExpenses: OCT_TOTAL_EXP,
            totalIncome: OCT_TOTAL_INCOME,
            totalSavings: OCT_TOTAL_SAVINGS,
            totalExpensesByCategory: {
              food: OCT_TOTAL_EXP_FOOD,
              fuel: OCT_TOTAL_EXP_FUEL,
              bills: OCT_TOTAL_EXP_BILLS,
              transportation: OCT_TOTAL_EXP_TRANSPORTATION,
              health: OCT_TOTAL_EXP_HEALTH,
              household: OCT_TOTAL_EXP_HOUSEHOLD,
              rent: OCT_TOTAL_EXP_RENT,
              loans: OCT_TOTAL_EXP_LOANS,
              others: OCT_TOTAL_EXP_OTHERS,
            },
            totalIncomeByCategory: {},
          },
          November: {
            totalExpenses: NOV_TOTAL_EXP,
            totalIncome: NOV_TOTAL_INCOME,
            totalSavings: NOV_TOTAL_SAVINGS,
            totalExpensesByCategory: {
              food: NOV_TOTAL_EXP_FOOD,
              fuel: NOV_TOTAL_EXP_FUEL,
              bills: NOV_TOTAL_EXP_BILLS,
              transportation: NOV_TOTAL_EXP_TRANSPORTATION,
              health: NOV_TOTAL_EXP_HEALTH,
              household: NOV_TOTAL_EXP_HOUSEHOLD,
              rent: NOV_TOTAL_EXP_RENT,
              loans: NOV_TOTAL_EXP_LOANS,
              others: NOV_TOTAL_EXP_OTHERS,
            },
            totalIncomeByCategory: {},
          },
          December: {
            totalExpenses: DEC_TOTAL_EXP,
            totalIncome: DEC_TOTAL_INCOME,
            totalSavings: DEC_TOTAL_SAVINGS,
            totalExpensesByCategory: {
              food: DEC_TOTAL_EXP_FOOD,
              fuel: DEC_TOTAL_EXP_FUEL,
              bills: DEC_TOTAL_EXP_BILLS,
              transportation: DEC_TOTAL_EXP_TRANSPORTATION,
              health: DEC_TOTAL_EXP_HEALTH,
              household: DEC_TOTAL_EXP_HOUSEHOLD,
              rent: DEC_TOTAL_EXP_RENT,
              loans: DEC_TOTAL_EXP_LOANS,
              others: DEC_TOTAL_EXP_OTHERS,
            },
            totalIncomeByCategory: {},
          },
        },
      ],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.post("/api/v1/expenses", async (req, res) => {
  try {
    let year = req.body.year;
    let month = req.body.month;
    let day = req.body.day;
    let title = req.body.title || "";
    let amount = req.body.amount;
    let desc = req.body.desc;
    let category = req.body.category;
    var data = new FormData();
    if (req.body.type === "expense") {
      data.append("entry.2075642609_year", year);
      data.append("entry.2075642609_month", month);
      data.append("entry.2075642609_day", day);
      data.append("entry.2011045302", title);
      data.append("entry.527408108", amount);
      data.append("entry.13824107", desc);
      data.append("entry.989237088", category);
    }
    if (req.body.type === "income") {
      data.append("entry.1595622325_year", year);
      data.append("entry.1595622325_month", month);
      data.append("entry.1595622325_day", day);
      data.append("entry.516806405", category);
      data.append("entry.16911630", amount);
      data.append("entry.192544430", desc);
    }
    data.append("fvv", "1");
    const EXPENSES_ENDPOINT =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc0l4IPv2ezuWGPYIF_HJd_aEVNuKNtxFjm_554W0RzJ6UGmg/formResponse";
    const INCOME_ENDPOINT =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdShBfU4Q36bdl1KeYD6vK2i7kcM9SG8Y7YRe2QHwO_M7yeyg/formResponse";
    var config = {
      method: "post",
      url: req.body.type === "expense" ? EXPENSES_ENDPOINT : INCOME_ENDPOINT,
      headers: {
        ...data.getHeaders(),
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        res.send({
          message: `Successfully added ${req.body.type}`,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
