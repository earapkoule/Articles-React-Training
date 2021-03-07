import React, { useState } from "react";
import emailjs from "emailjs-com";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const serviceId = "service_b7kfurl";
const templateId = "template_x580iig";
const userId = "user_geIno9z0Xbd1GAMp601IJ";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50%",
    },
  },
}));

const ContactPage = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        console.log(result.text);
        setLoading(false);
        setEmailSent(true);
      },
      (error) => {
        setError(error.text);
        setLoading(false);
      }
    );
  }

  return (
    <div>
      <h1>Contact Us!</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={sendEmail}
      >
        <TextField
          id="outlined-secondary"
          label="Email From"
          variant="outlined"
          color="secondary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <TextField
          id="outlined-secondary"
          label="Contact Name"
          variant="outlined"
          color="secondary"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-secondary"
          label="Email Subject"
          variant="outlined"
          color="secondary"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          id="outlined-secondary"
          label="Email Message"
          variant="outlined"
          color="secondary"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {error && (
          <h1>Your Email has NOT been sent. :( - Propably a CORS error</h1>
        )}
        {emailSent && <h5>Your email has been Sent.</h5>}
        <Button variant="outlined" disabled={loading} type="submit">
          Send Email
        </Button>
      </form>
    </div>
  );
};

export default ContactPage;
