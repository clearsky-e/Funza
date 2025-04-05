import Link from "next/link";

export default function Home() {
  return (
    <div
      // style={{ height: "78vh" }}
      className="flex flex-col items-center bg-gray-900 text-white p-8 sm:p-12 "
    >
      {/* Utilities Section */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Date & Time Utility */}
        <UtilityCard
          title="📅 Time Utility"
          description="Need to figure out a date, convert timezones, or find a day? These little tools do all that in a flash. Just type in your info and get the answer—easy and quick!"
          href="/date-time"
        />

        {/* Random Number Generator */}
        <UtilityCard
          title="🔢 Number Play"
          description="Get ready for some number fun! Test your skills with a few fast-paced challenges that will keep you thinking. Can you beat the clock? Let’s find out!!"
          href="/number"
        />

        {/* Math Calculator */}
        <UtilityCard
          title="➗ Math Fun"
          description="Tackle some quick math with these handy tools! Find square roots, check for prime numbers, calculate LCM/GCD, and even figure out powers—math, simplified!"
          href="/math"
        />

        {/* Age Calculator */}
        <UtilityCard
          title="🧮 Conversion"
          description="Switch between units with ease! Whether you’re converting currency, length, weight, or temperature, these tools help you make quick and accurate conversions without the hassle."
          href="/conversion"
        />
      </section>
    </div>
  );
}

// Utility Card Component
function UtilityCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="p-6 bg-gray-800 rounded-lg text-center border border-gray-700 hover:bg-gray-700 transition-all duration-300"
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-400 mt-2">{description}</p>
    </Link>
  );
}
