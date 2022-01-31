// This is your test secret API key.
const stripe = require('stripe')('pk_live_51KMnSCEnxayyKJ7E8FXEBqdoK7q8KyMZpBNO8FdHMAlTZFOMTZ3vnHA9IbE4KqcdMkQhn3NiY9nDk3YFUp4BzbSC00TC9Z9zJ7');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'https://www.collabez.online/tasks.html';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1KNVhSEnxayyKJ7EtFayYlkf',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `collabez.online/success.html`,
    cancel_url: `collabez.online/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));