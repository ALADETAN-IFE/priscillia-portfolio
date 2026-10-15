"use client";

import { Button, Input } from "@/components/common";
import { useState } from "react";

type responseType = {
  type: "success" | "error";
  message: string;
};

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<responseType | undefined>();

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${fullName}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber}\n\n${message}`,
    );

    setResponse({
      type: "success",
      message: "Your email app is opening with your message.",
    });
    setTimeout(() => {
      window.location.href = `mailto:ijomahpriscilla@gmail.com?subject=${subject}&body=${body}`;
      setResponse(undefined);
    }, 2000);
  };
  return (
    <form className="w-full flex flex-col gap-4.75" onSubmit={handleSubmit}>
      {response && (
        <p
          className={
            response.type === "success" ? "text-green-300" : "text-red-300"
          }
          role="status"
        >
          {response.message}
        </p>
      )}
      <Input
        type="text"
        name="fullName"
        id="full_name"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="text"
        name="phoneNumber"
        id="phone_number"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Input
        as="textarea"
        name="message"
        id="message"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <Button type="submit" value="Submit" className="w-fit px-12.5" />
    </form>
  );
};

export default ContactForm;
