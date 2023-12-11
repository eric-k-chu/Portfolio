type Props = {
  className?: string;
  onClick?: () => void;
};

export function GitHubIcon({ className, onClick }: Props) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"
      />
    </svg>
  );
}

export function LinkedInIcon({ className, onClick }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        d="M20.33 2c.922 0 1.67.748 1.67 1.67v16.66A1.67 1.67 0 0 1 20.33 22H3.67A1.67 1.67 0 0 1 2 20.33V3.67C2 2.749 2.748 2 3.67 2h16.66Zm-4.811 7.5c-1.42 0-2.39.627-2.823 1.356l-.071.13V9.625H9.917v9.583h2.916v-4.642c0-1.556.573-2.545 1.95-2.545.95 0 1.349.84 1.381 2.337l.003.208v4.642h2.916v-5.293c0-2.857-.683-4.415-3.564-4.415Zm-7.686 0H4.917v9.583h2.916V9.5Zm-1.458-5a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Z"
      />
    </svg>
  );
}

export function MenuIcon({ className, onClick }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      className={className}
      onClick={onClick}
    >
      <path d="M34.063 10.625H5.938a.938.938 0 1 1 0-1.875h28.125a.938.938 0 0 1 0 1.875m0 10.313H5.938a.938.938 0 0 1 0-1.876h28.125a.938.938 0 0 1 0 1.876m0 10.312H5.938a.938.938 0 1 1 0-1.875h28.125a.938.938 0 0 1 0 1.875" />
      <path d="M34.063 20.938H5.938a.938.938 0 0 1 0-1.876h28.125a.938.938 0 0 1 0 1.876" />
    </svg>
  );
}

export function ExitIcon({ className, onClick }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z" />
      <path d="m11 16 5-4-5-4v3.001H3v2h8z" />
    </svg>
  );
}

export function HomeIcon({ className, onClick }: Props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z" />
    </svg>
  );
}

export function AboutIcon({ className, onClick }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      onClick={onClick}
    >
      <path d="M256 265.308c73.252 0 132.644-59.391 132.644-132.654C388.644 59.412 329.252 0 256 0c-73.262 0-132.643 59.412-132.643 132.654 0 73.263 59.381 132.654 132.643 132.654zm169.874 127.796c-5.922-35.474-36-84.509-57.552-107.465-5.829-6.212-15.948-3.628-19.504-1.427-27.04 16.672-58.782 26.399-92.819 26.399-34.036 0-65.778-9.727-92.818-26.399-3.555-2.201-13.675-4.785-19.505 1.427-21.55 22.956-51.628 71.991-57.551 107.465C71.573 480.444 164.877 512 256 512s184.427-31.556 169.874-118.896z" />
    </svg>
  );
}

export function ProjectIcon({ className, onClick }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 6a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 13.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z"
      />
    </svg>
  );
}

export function ContactIcon({ className, onClick }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2.75c-1.615 0-3.075.404-4.135 1.388C1.795 5.132 1.25 6.607 1.25 8.5v7c0 1.893.545 3.369 1.615 4.362 1.06.984 2.52 1.388 4.135 1.388h10c1.615 0 3.075-.404 4.135-1.388 1.07-.993 1.615-2.469 1.615-4.362v-7c0-1.893-.545-3.368-1.615-4.362-1.06-.984-2.52-1.388-4.135-1.388H7Zm12.229 5.612a.75.75 0 0 0-.918-1.187l-5.547 4.287a1.25 1.25 0 0 1-1.528 0L5.689 7.175a.75.75 0 1 0-.918 1.187l5.548 4.287a2.75 2.75 0 0 0 3.362 0l5.548-4.287Z"
      />
    </svg>
  );
}

export function LogoIcon({ className, onClick }: Props) {
  return (
    <svg
      className={className ?? "h-4 w-4 fill-black dark:fill-white/90"}
      onClick={onClick}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.138.053a12.018 12.018 0 0 0-9.646 3.481A12.014 12.014 0 0 0 .937 16.651a12.014 12.014 0 0 0 11.162 7.348 2.275 2.275 0 1 0-.037-4.549 7.438 7.438 0 0 1-6.932-4.562 7.438 7.438 0 0 1 1.587-8.145 7.437 7.437 0 0 1 12.378 3.014H12.05a2.275 2.275 0 1 0 0 4.55h9.674A2.275 2.275 0 0 0 24 12.04 12.014 12.014 0 0 0 16.597.914a11.962 11.962 0 0 0-3.459-.86z" />
    </svg>
  );
}
