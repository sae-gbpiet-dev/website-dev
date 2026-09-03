"use client";

import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

const contactEmail = "saegbpiet.dev@gmail.com";

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = formData.subject.trim() || "New Contact Enquiry";
    const body = [
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      "",
      "Message:",
      formData.message.trim(),
    ].join("\n");

    const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      <PageHeader title="CONTACT US" />

      <h1 className="p-10 text-center text-xl">Contact us for further queries</h1>

      <div className="flex w-full flex-col justify-center gap-10 p-6 pb-16 md:flex-row md:p-10">
        <div className="w-full rounded-tl-4xl rounded-br-4xl bg-brand-blue/50 p-8 md:w-[45%]">
          <h2 className="mb-6 text-center text-xl">Drop us a message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full rounded-tl-2xl rounded-br-2xl bg-brand-gold p-4 text-brand-dark placeholder:text-brand-dark/80 shadow-md outline-none ring-0"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full rounded-tl-2xl rounded-br-2xl bg-brand-gold p-4 text-brand-dark placeholder:text-brand-dark/80 shadow-md outline-none ring-0"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full rounded-tl-2xl rounded-br-2xl bg-brand-gold p-4 text-brand-dark placeholder:text-brand-dark/80 shadow-md outline-none ring-0"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows={6}
              className="w-full resize-none rounded-tl-2xl rounded-br-2xl bg-brand-gold p-4 text-brand-dark placeholder:text-brand-dark/80 shadow-md outline-none ring-0"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-tl-2xl rounded-br-2xl border border-brand-gold bg-brand-gold px-6 py-3 font-heading font-semibold text-brand-dark transition duration-300 hover:bg-transparent hover:text-white"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex w-full items-center justify-center rounded-tl-4xl rounded-br-4xl bg-white p-8 text-brand-dark md:w-[45%]">
          <div className="w-full max-w-md space-y-5">
            <h2 className="text-2xl font-semibold">Contact Details</h2>
            <p className="text-base text-gray-700">
              Reach out to us and we’ll get back to you as soon as possible.
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="inline-block break-all text-lg font-medium text-brand-blue underline underline-offset-4"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;