"use client";

type OpenContactButtonProps = {
  className?: string;
  destination?: string;
  label: string;
};

export default function OpenContactButton({
  className,
  destination,
  label,
}: OpenContactButtonProps) {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("openContactForm", {
              detail: { destination },
            })
          );
        }
      }}
      className={className}
    >
      {label}
    </button>
  );
}
