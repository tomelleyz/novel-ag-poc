import Link from "next/link";

export default function InfoCard({
  linkToCardInfo,
  cardTitle,
  cardInfoValue,
  cardInfoText,
}) {
  return (
    <Link
      href={linkToCardInfo}
      className="flex min-h-[144px] w-full flex-col rounded-xl border border-solid border-grey-150 bg-white drop-shadow-[0px_0.639628px_1.27926px_rgba(16,_24,_40,_0.09)] transition duration-300 hover:bg-green-100 md:w-[calc(50%_-_12px)] lg:w-[calc(33.333333%_-_16px)] xl:w-[calc(25%_-_18px)]"
    >
      <div className="flex items-start justify-between gap-2 border-b border-solid border-grey-150 px-6 py-3">
        <p className="text-sm font-medium text-grey-200">{cardTitle}</p>
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
        >
          <path
            d="M6.58333 1.75V2.91667H3.66667V11.0833H11.8333V8.16667H13V11.6667C13 11.8214 12.9385 11.9697 12.8291 12.0791C12.7197 12.1885 12.5714 12.25 12.4167 12.25H3.08333C2.92862 12.25 2.78025 12.1885 2.67085 12.0791C2.56146 11.9697 2.5 11.8214 2.5 11.6667V2.33333C2.5 2.17862 2.56146 2.03025 2.67085 1.92085C2.78025 1.81146 2.92862 1.75 3.08333 1.75H6.58333ZM11.0791 4.49575L7.75 7.82483L6.92517 7L10.2542 3.67092L8.33333 1.75H13V6.41667L11.0791 4.49575Z"
            className="fill-green-400"
          />
        </svg>
      </div>

      <div className="flex flex-col gap-2 p-6">
        <p className="line-clamp-1 text-lg font-medium text-grey-300">
          {cardInfoValue}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-grey-300">
            {cardInfoText}
          </span>

          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden={true}
            className="shrink-0"
          >
            <g opacity="0.5">
              <path
                d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM1.02506 7C1.02506 10.2999 3.70013 12.9749 7 12.9749C10.2999 12.9749 12.9749 10.2999 12.9749 7C12.9749 3.70013 10.2999 1.02506 7 1.02506C3.70013 1.02506 1.02506 3.70013 1.02506 7Z"
                className="fill-grey-200"
              />
              <path
                d="M6.33568 2.48414C7.17495 2.3607 8.032 2.47353 8.81072 2.80999C9.58943 3.14644 10.259 3.69321 10.7443 4.38896C11.2296 5.08471 11.5115 5.90192 11.5583 6.74892C11.6051 7.59591 11.415 8.4392 11.0093 9.18418C10.6035 9.92916 9.99829 10.5464 9.26138 10.9666C8.52447 11.3868 7.68506 11.5933 6.83731 11.5631C5.98955 11.5328 5.16699 11.267 4.46189 10.7954C3.75679 10.3237 3.19704 9.66499 2.84544 8.893L7.00003 7.00076L6.33568 2.48414Z"
                className="fill-grey-200"
              />
            </g>
          </svg>
        </div>
      </div>
    </Link>
  );
}
