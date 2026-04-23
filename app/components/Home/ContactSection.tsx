import React from "react";

function ContactSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 py-12 sm:gap-10 sm:py-16">
      <div className="space-y-4 text-white">
        <h1 className="text-center font-heading text-3xl sm:text-4xl">CONTACT US</h1>
        <h2 className="text-center font-sans text-lg sm:text-2xl">
          Get in touch with us
        </h2>
      </div>
      <div className="flex w-full flex-col items-center gap-5">
        <div className="flex min-h-36 w-full max-w-4xl items-center justify-center rounded-tl-4xl rounded-br-4xl bg-brand-blue px-6 py-8 text-center font-sans text-base leading-7 text-white sm:text-xl">
          Some text here about how to contact us like something catchy and eye
          capturing and also some contact details and stuff like that
        </div>

        <div className="flex w-full max-w-4xl justify-center sm:justify-end">
          <button className="cursor-pointer rounded-tr-4xl rounded-bl-4xl bg-brand-gold px-6 py-3 font-heading text-base text-brand-dark transition-all duration-500 border-2 hover:border-brand-gold hover:bg-black hover:text-white sm:text-lg">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
