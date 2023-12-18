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
      .then((res) => {
        alert(`Email sent successfully! ${res}`);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) =>
        alert(`An unexpected error occured with sending the email: ${err}`),
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
            className="text-cm-gray block text-sm font-medium leading-6"
            htmlFor="name"
          >
            Your Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              className="dark:border-cm-gray border-gray-400 dark:border-cm-gray block w-full rounded-md border bg-light-1 py-1.5 shadow-md shadow-light-s dark:bg-dark-2"
              type="text"
            />
          </div>
        </div>
        <div className="flex w-1/3 flex-col">
          <label
            className="text-cm-gray block text-sm font-medium leading-6"
            htmlFor="email"
          >
            Your Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className="dark:border-cm-gray border-gray-400 dark:border-cm-gray block w-full rounded-md border bg-light-1 py-1.5 shadow-md shadow-light-s dark:bg-dark-2"
              type="email"
            />
          </div>
        </div>
        <div className="flex w-1/3 flex-col">
          <label
            className="text-cm-gray block text-sm font-medium leading-6"
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
              className="dark:border-cm-gray border-gray-400 block w-full resize-none rounded-md border bg-light-1 py-1.5 shadow-md shadow-light-s dark:bg-dark-2"
            />
          </div>
        </div>
        <button className="bg-blue-600 w-1/3 rounded-md px-4 py-2 font-semibold text-light-1">
          SEND
        </button>
      </form>
    </motion.div>
  );
}
