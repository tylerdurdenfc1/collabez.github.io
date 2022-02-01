// This is your test secret API key.



const stripe = require('stripe')('sk_test_51KMnSCEnxayyKJ7EGkTwWsoxUQLh3f6WdgnV07CQUtzs5V1mH7oQCZ0oSqcb7BMl9S9xhcfX09hyo96C0ysvMY3n00lVbbXWwZ');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'https://www.collabez.online/';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1KNVM0EnxayyKJ7ERV1xnI6X',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `https://www.collabez.online/success.html`,
    cancel_url: `https://www.collabez.online/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));