import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { showAndHide } from "../lib/animations";

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Eric Chu",
      message: message,
    };

    emailjs
      .send(
        "service_tpqf9v3",
        "template_qkgbvo7",
        templateParams,
        "stFRVzVYtVUylpgKP",
      )
      .then(() => {
        alert("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) =>
        alert(
          `An unexpected error occured with sending the email: ${err.message}`,
        ),
      );
  }

  return (
    <motion.div
      className="mx-auto mb-96 h-96 max-w-7xl px-8"
      initial="disappear"
      animate="appear"
      variants={showAndHide}
    >
      <form
        className="mt-12 flex w-full flex-col items-center justify-center gap-y-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-medium font-semibold leading-6 md:text-lg">
          Contact Me
        </h1>
        <div className="flex w-1/3 flex-col">
          <label
            className="block text-sm font-medium leading-6 text-cm-gray"
            htmlFor="name"
          >
            Your Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              className="block w-full rounded-md border border-gray-300 bg-light-1 px-2 py-1.5 shadow-md shadow-light-s dark:border-cm-gray dark:bg-dark-2"
              type="text"
            />
          </div>
        </div>
        <div className="flex w-1/3 flex-col">
          <label
            className="block text-sm font-medium leading-6 text-cm-gray"
            htmlFor="email"
          >
            Your Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className="block w-full rounded-md border border-gray-300 bg-light-1 px-2 py-1.5 shadow-md shadow-light-s dark:border-cm-gray dark:bg-dark-2"
              type="email"
            />
          </div>
        </div>
        <div className="flex w-1/3 flex-col">
          <label
            className="block text-sm font-medium leading-6 text-cm-gray"
            htmlFor="message"
          >
            Message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              value={message}
              rows={10}
              onChange={(e) => setMessage(e.currentTarget.value)}
              className="block w-full resize-none rounded-md border border-gray-300 bg-light-1 px-2 py-1.5 shadow-md shadow-light-s dark:border-cm-gray dark:bg-dark-2"
            />
          </div>
        </div>
        <button className="w-1/3 rounded-md bg-blue-600 px-4 py-2 font-semibold text-light-1">
          SEND
        </button>
      </form>
    </motion.div>
  );
}
