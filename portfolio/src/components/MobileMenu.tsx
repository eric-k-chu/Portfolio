import { useState } from "react";
import { MenuIcon } from ".";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="block md:hidden">
      <MenuIcon
        className="h-7 w-7 fill-black hover:cursor-pointer dark:fill-white/90"
        onClick={() => setIsOpen(true)}
      />
      <div
        className={`fixed inset-0 z-10 transition duration-[300ms] ease-in-out ${
          isOpen
            ? "bg-slate-900/25 backdrop-blur-sm dark:bg-black/25"
            : "pointer-events-none bg-transparent backdrop-blur-none"
        }`}
      >
        <div
          className={`flex h-full items-start justify-end transition-transform duration-[300ms] ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="min-h-full w-full" onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </section>
  );
}
