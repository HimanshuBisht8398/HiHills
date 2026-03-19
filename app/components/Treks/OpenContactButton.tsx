"use client";

type OpenContactButtonProps = {
  className?: string;
  label: string;
};

export default function OpenContactButton({
  className,
  label,
}: OpenContactButtonProps) {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("openContactForm"));
        }
      }}
      className={className}
    >
      {label}
    </button>
  );
}
