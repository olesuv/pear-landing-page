import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function TryPear() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Illustration behind content */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 -ml-20 hidden lg:block"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* SVG remains the same as in your previous Hero.tsx */}
        </div>

        {/* Content area */}
        <div className="relative pb-2 pt-32 md:pb-4 md:pt-40">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="mb-4 text-4xl font-semibold" data-aos="fade-up">
              Interested in contributing to PearAI?
            </h1>
            <p
              className="mb-4 text-sm text-gray-500 sm:text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Pear is built by a large community of developers. If you have
              questions, or would like to discuss, you can join our{" "}
              <Link
                href="https://discord.gg/7QMraJUsQt"
                className="font-medium text-primary-700 hover:text-primary-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </Link>{" "}
              and talk to us directly! 💬
            </p>
            <p
              className="mb-8 text-sm text-gray-500 sm:text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Help the community out by giving{" "}
              <Link
                href="https://github.com/trypear/pearai-app"
                className="font-medium text-primary-700 hover:text-primary-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                The repo
              </Link>{" "}
              a star! 🤩
            </p>
            <div className="mx-auto max-w-xs items-center justify-center sm:flex sm:max-w-none sm:space-x-2.5">
              <div data-aos="fade-up" data-aos-delay="400">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/docs/contributors">Contributing 101</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
