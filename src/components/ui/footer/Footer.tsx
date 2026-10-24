import { HorizontalLine, Typography } from "@/components/common";
import Link from "next/link";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-secondary flex justify-center max-sm:px-5 min-h-111 py-1"
    >
      <div className="max-w-306 w-9/10 flex max-md:flex-col justify-between items-center">
        <div className="pt-8.25 pb-6.75 flex max-sm:flex-col justify-between gap-10 xl:gap-60.5 w-full">
          <div className="flex flex-col gap-15">
            <div className="flex flex-col gap-3.75 max-w-83">
              <div className="flex gap-1.25 items-center">
                <HorizontalLine />
                <Typography variant="p" className="text-white font-semibold">
                  Let&apos;s Work Together!
                </Typography>
              </div>
              <Typography variant="span" className="text-tertiary font-medium">
                Have a project idea or design challenge? I&apos;d love to hear
                from you.
              </Typography>
            </div>
            <div className="flex flex-col gap-7.5 text-white">
              <div className="flex w-full justify-between gap-10 lg:gap-34">
                <Typography variant="span" className="font-semibold">
                  Email
                </Typography>
                <Typography variant="span" className="font-semibold">
                  <Link href="mailto:ijomahpriscilla@gmail.com">
                    ijomahpriscilla@gmail.com
                  </Link>
                </Typography>
              </div>
              <div className="flex w-full justify-between gap-10 lg:gap-34">
                <Typography variant="span" className="font-semibold">
                  Whatsapp
                </Typography>
                <Typography variant="span" className="font-semibold">
                  <Link href="https://wa.me/2347089984480">+2347089984480</Link>
                </Typography>
              </div>
              <div className="flex w-full justify-between gap-10 lg:gap-34">
                <Typography variant="span" className="font-semibold">
                  LinkedIn
                </Typography>
                <Typography variant="span" className="font-semibold">
                  <Link href="https://www.linkedin.com/in/priscilla-ijomah">
                    www.linkedin.com/in/priscilla-ijomah
                  </Link>
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex md:w-114.5 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
