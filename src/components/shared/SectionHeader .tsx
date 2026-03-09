import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  descriptionColor?: string;
  description?: string;
  secondDescription?: string;
  align?: "left" | "center" ;
  theme?: "dark" | "light";
  size?: "md" | "lg" | "xl";
}

export const SectionHeader = ({
  badge,
  title,
  description,
  secondDescription,
  align = "left",
  theme = "dark",
  size = "lg",
}: SectionHeaderProps) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
  };

  const titleSizes = {
    md: "text-4xl md:text-6xl",
    lg: "text-6xl md:text-8xl",
    xl: "text-6xl md:text-8xl",
  };

  const descriptionColors =
    theme === "dark" ? "text-slate-300" : "text-zinc-700";

  const badgeTheme =
    theme === "dark"
      ? "border-white/10 bg-white/5 text-gotracker-orange"
      : "border-[#1e3a8a]/10 bg-[#1e3a8a]/5 text-gotracker-orange";

  return (
    <header className={`flex flex-col ${alignClasses[align]}`}>
      {badge && (
        <div
          className={`mb-8 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.3em] ${badgeTheme}`}
        >
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gotracker-orange opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gotracker-orange" />
          </span>
          {badge}
        </div>
      )}

      <h2
        className={`${titleSizes[size]} font-black mb-8 leading-[0.85] tracking-tighter italic`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mb-8 text-x1 font-medium leading-relaxed ${descriptionColors}`}
        >
          {description}
        </p>
      )}

      {secondDescription && (
        <p
          className={`mb-8 text-x1 font-medium leading-relaxed ${descriptionColors}`}
        >
          {secondDescription}
        </p>
      )}
    </header>
  );
};
