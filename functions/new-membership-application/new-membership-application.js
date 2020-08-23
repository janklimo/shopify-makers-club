const sendgrid = require("@sendgrid/mail");

const invalidInput = () => ({
  statusCode: 500,
  body: JSON.stringify({ message: "No email provided." }),
});

exports.handler = async function (event) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  if (event.httpMethod != "POST") {
    return invalidInput();
  }

  const { email, expectations, link, name, work } = JSON.parse(event.body);

  if (!email) {
    return invalidInput();
  }

  const msg = {
    to: email,
    from: {
      email: process.env.EMAIL_SENDER,
      name: "Jan @ Shopify Makers Club",
    },
    subject: `New Application: ${name}`,
    html: `
      <p>
        <b>Name</b>: ${name}
      </p>
      <p>
        <b>Email</b>: ${email}
      </p>
      <p>
        <b>Link</b>: ${link}
      </p>
      <p>
        <b>Work</b>: ${work}
      </p>
      <p>
        <b>Expectations</b>: ${expectations}
      </p>
    `,
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
