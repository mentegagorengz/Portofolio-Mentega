export default function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2C20 2 22 14 20 20C18 14 20 2 20 2Z"
        fill="#FFC054"
      />
      <path
        d="M20 38C20 38 18 26 20 20C22 26 20 38 20 38Z"
        fill="#FFC054"
      />
      <path
        d="M2 20C2 20 14 18 20 20C14 22 2 20 2 20Z"
        fill="#FFC054"
      />
      <path
        d="M38 20C38 20 26 22 20 20C26 18 38 20 38 20Z"
        fill="#FFC054"
      />
    </svg>
  );
}
