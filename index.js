const PORT = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');
var axios = require('axios');
var FormData = require('form-data');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*',
  })
);

app.get('/', (req, res) => {
  res.send('Hello World From Expense Tracker!');
});

app.post('/api/v1/expenses', async (req, res) => {
  try {
    let year = req.body.year;
    let month = req.body.month;
    let day = req.body.day;
    let title = req.body.title || '';
    let amount = req.body.amount;
    let desc = req.body.desc;
    let category = req.body.category;
    var data = new FormData();
    if (req.body.type === 'expense') {
      data.append('entry.2075642609_year', year);
      data.append('entry.2075642609_month', month);
      data.append('entry.2075642609_day', day);
      data.append('entry.2011045302', title);
      data.append('entry.527408108', amount);
      data.append('entry.13824107', desc);
      data.append('entry.989237088', category);
    }
    if (req.body.type === 'income') {
      data.append('entry.1595622325_year', year);
      data.append('entry.1595622325_month', month);
      data.append('entry.1595622325_day', day);
      data.append('entry.516806405', category);
      data.append('entry.16911630', amount);
      data.append('entry.192544430', desc);
    }
    data.append('fvv', '1');
    const EXPENSES_ENDPOINT =
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc0l4IPv2ezuWGPYIF_HJd_aEVNuKNtxFjm_554W0RzJ6UGmg/formResponse';
    const INCOME_ENDPOINT =
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdShBfU4Q36bdl1KeYD6vK2i7kcM9SG8Y7YRe2QHwO_M7yeyg/formResponse';
    var config = {
      method: 'post',
      url: req.body.type === 'expense' ? EXPENSES_ENDPOINT : INCOME_ENDPOINT,
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
