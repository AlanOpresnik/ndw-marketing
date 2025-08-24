import React from "react";

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  href?:string;
}

export default function MainButton({ children, icon, className,href }: Props) {
  return (
    <a
    href={href || ''}
      className={`${className} !px-6 w-fit cursor-pointer flex gap-2 !py-3 bg-navy text-white font-bold rounded-full hover:bg-primary-blue transition-colors`}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </a>
  );
}
