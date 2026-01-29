import Image from "next/image";

interface HeroSectionProps {
  displayName: string;
  profileImageUrl: string;
  description?: string;
}

export function HeroSection({ displayName, profileImageUrl, description }: HeroSectionProps) {
  // Split the name to highlight the first name in gold
  const nameParts = displayName.split(" ");
  const firstName = nameParts[0];
  const restOfName = nameParts.slice(1).join(" ");

  return (
    <section className="relative text-center h-[70vh] md:h-[80vh] flex flex-col items-center justify-center bg-linear-to-br from-black via-gray-900 to-black">
      <div className="relative z-20 p-4 flex flex-col items-center">
        <div className="mb-8">
          <Image
            src={profileImageUrl}
            alt={displayName}
            className="w-50 h-50 rounded-full border-4 border-[#F1ab1c] shadow-2xl object-cover"
          />
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
          Magic <span className="text-[#F1ab1c]">{firstName}</span>{" "}
          {restOfName && <span className="text-white">{restOfName}</span>}
        </h1>
        {description && (
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white font-light">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
