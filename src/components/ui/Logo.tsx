import React from "react";

type LogoProps = {
  className?: string;
  size?: number;
};

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <img
      src="/assets/img/go-tracker-logo.png"
      alt="GO Tracker"
      className={`h-8 sm:h-10 md:h-20 w-auto object-contain ${className}`}
    />
  );
};

export default Logo;
