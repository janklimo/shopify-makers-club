const sendgrid = require("@sendgrid/mail");

const invalidInput = () => ({
  statusCode: 200,
  body: JSON.stringify({ message: "No email provided." }),
});

exports.handler = async function (event) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  if (event.httpMethod != "POST") {
    return invalidInput();
  }

  const { email } = JSON.parse(event.body);

  if (!email) {
    return invalidInput();
  }

  const msg = {
    to: email,
    from: {
      email: process.env.EMAIL_SENDER,
      name: "Jan @ Shopify Makers Club",
    },
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  try {
    await sendgrid.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent!" }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
