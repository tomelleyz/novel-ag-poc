import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ComingSoonLink, PrimaryMenuLink, SecondaryMenuLink } from "./MenuLink";

export default function NavigationPanelMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <Dialog.Trigger asChild>
        <button
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          className="flex h-[35px] w-[35px] items-center justify-center transition-all lg:hidden"
        >
          <span className="inline-flex flex-col items-center justify-center overflow-visible">
            <span
              className={`my-1 h-[2px] w-[21px] bg-grey-400 transition-transform duration-[400ms] ${
                isMenuOpen ? "translate-y-[5px] rotate-45" : "transform-none"
              }`}
            ></span>
            <span
              className={`my-1 h-[2px] w-[21px] bg-grey-400 transition-transform duration-300 ${
                isMenuOpen ? "translate-y-[-5px] -rotate-45" : "transform-none"
              }`}
            ></span>
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 top-[72px] overflow-auto overscroll-contain bg-white">
          <Dialog.Content className="data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn w-full bg-white px-4 pb-16 lg:px-8">
            <Dialog.Title className="sr-only">Menu</Dialog.Title>
            <Dialog.Description className="sr-only">
              Menu links to navigate dashboard
            </Dialog.Description>

            <nav className="px-4 py-8">
              <div className="drop-shadow-[0px_0.639628px_1.27926px_rgba(16,_24,_40,_0.08)]">
                <PrimaryMenuLink href="/">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.75 9.75L15.75 9.75L15.75 15C15.75 15.1989 15.671 15.3897 15.5303 15.5303C15.3897 15.671 15.1989 15.75 15 15.75L9.75 15.75L9.75 9.75ZM2.25 8.25L2.25 3C2.25 2.80109 2.32902 2.61032 2.46967 2.46967C2.61032 2.32902 2.80109 2.25 3 2.25L15 2.25C15.1989 2.25 15.3897 2.32902 15.5303 2.46967C15.671 2.61032 15.75 2.80109 15.75 3L15.75 8.25L2.25 8.25ZM3 15.75C2.80109 15.75 2.61032 15.671 2.46967 15.5303C2.32902 15.3897 2.25 15.1989 2.25 15L2.25 9.75L8.25 9.75L8.25 15.75L3 15.75Z"
                      className="fill-grey-400"
                    />
                  </svg>

                  <span>Dashboard</span>
                </PrimaryMenuLink>

                <PrimaryMenuLink href="#">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.75 12C5.50736 12 4.5 13.0074 4.5 14.25C4.5 14.6642 4.83579 15 5.25 15H12.75C13.1642 15 13.5 14.6642 13.5 14.25C13.5 13.0074 12.4926 12 11.25 12H6.75ZM3 14.25C3 12.1789 4.67893 10.5 6.75 10.5H11.25C13.3211 10.5 15 12.1789 15 14.25C15 15.4926 13.9926 16.5 12.75 16.5H5.25C4.00736 16.5 3 15.4926 3 14.25Z"
                      className="fill-grey-400"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 3C7.75736 3 6.75 4.00736 6.75 5.25C6.75 6.49264 7.75736 7.5 9 7.5C10.2426 7.5 11.25 6.49264 11.25 5.25C11.25 4.00736 10.2426 3 9 3ZM5.25 5.25C5.25 3.17893 6.92893 1.5 9 1.5C11.0711 1.5 12.75 3.17893 12.75 5.25C12.75 7.32107 11.0711 9 9 9C6.92893 9 5.25 7.32107 5.25 5.25Z"
                      className="fill-grey-400"
                    />
                  </svg>

                  <span>Profile</span>
                </PrimaryMenuLink>

                <PrimaryMenuLink href="#">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25ZM3 3.75V14.25H15V3.75H3ZM5.25 9.75H6.75V12.75H5.25V9.75ZM8.25 5.25H9.75V12.75H8.25V5.25ZM11.25 7.5H12.75V12.75H11.25V7.5Z"
                      className="fill-grey-400"
                    />
                  </svg>

                  <span>Activities</span>
                </PrimaryMenuLink>

                <PrimaryMenuLink href="#">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 5.25V3.75H3V14.25H15V12.75H9C8.80109 12.75 8.61032 12.671 8.46967 12.5303C8.32902 12.3897 8.25 12.1989 8.25 12V6C8.25 5.80109 8.32902 5.61032 8.46967 5.46967C8.61032 5.32902 8.80109 5.25 9 5.25H15ZM2.25 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25ZM9.75 6.75V11.25H15V6.75H9.75ZM11.25 8.25H13.5V9.75H11.25V8.25Z"
                      className="fill-grey-400"
                    />
                  </svg>

                  <span>Wallet</span>
                </PrimaryMenuLink>
              </div>

              <div className="mb-[74px] mt-6">
                <p className="mb-2 px-3 text-xs font-medium text-grey-200">
                  Coming soon
                </p>

                <div className="drop-shadow-[0px_0.639628px_1.27926px_rgba(16,_24,_40,_0.1)]">
                  <ComingSoonLink href="#">Loans</ComingSoonLink>
                  <ComingSoonLink href="#">Training</ComingSoonLink>
                  <ComingSoonLink href="#">Investment</ComingSoonLink>
                </div>
              </div>

              <div className="drop-shadow-[0px_0.639628px_1.27926px_rgba(16,_24,_40,_0.1)]">
                <SecondaryMenuLink href="#">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.50498 13.25C2.18794 12.7017 1.94148 12.1156 1.77148 11.5055C2.14146 11.3173 2.45218 11.0305 2.66926 10.6767C2.88633 10.3229 3.00131 9.91592 3.00146 9.50084C3.00162 9.08575 2.88695 8.67871 2.67014 8.32475C2.45332 7.97079 2.14282 7.6837 1.77298 7.49525C2.11201 6.26937 2.75753 5.14996 3.64873 4.2425C3.9968 4.46879 4.4007 4.59437 4.81572 4.60534C5.23074 4.6163 5.6407 4.51222 6.00023 4.30462C6.35977 4.09703 6.65485 3.794 6.85283 3.42908C7.05081 3.06416 7.14396 2.65158 7.12198 2.237C8.35357 1.91872 9.64591 1.91923 10.8772 2.2385C10.8554 2.65307 10.9488 3.06559 11.1469 3.43041C11.3451 3.79522 11.6403 4.09811 11.9999 4.30555C12.3595 4.51299 12.7694 4.61689 13.1844 4.60576C13.5994 4.59464 14.0033 4.46891 14.3512 4.2425C14.7855 4.685 15.171 5.18825 15.495 5.75C15.8197 6.31175 16.0627 6.8975 16.2285 7.4945C15.8585 7.68268 15.5478 7.96953 15.3307 8.32333C15.1136 8.67713 14.9987 9.08408 14.9985 9.49917C14.9984 9.91425 15.113 10.3213 15.3298 10.6753C15.5466 11.0292 15.8571 11.3163 16.227 11.5048C15.888 12.7306 15.2424 13.85 14.3512 14.7575C14.0032 14.5312 13.5993 14.4056 13.1843 14.3947C12.7692 14.3837 12.3593 14.4878 11.9997 14.6954C11.6402 14.903 11.3451 15.206 11.1471 15.5709C10.9492 15.9358 10.856 16.3484 10.878 16.763C9.6464 17.0813 8.35406 17.0808 7.12273 16.7615C7.14452 16.3469 7.05118 15.9344 6.85305 15.5696C6.65492 15.2048 6.35972 14.9019 6.00011 14.6945C5.64051 14.487 5.23053 14.3831 4.81553 14.3942C4.40053 14.4054 3.99671 14.5311 3.64873 14.7575C3.20548 14.3052 2.82118 13.7987 2.50498 13.25ZM6.74998 13.397C7.5492 13.858 8.15012 14.5978 8.43748 15.4745C8.81173 15.5098 9.18748 15.5105 9.56173 15.4753C9.84929 14.5984 10.4505 13.8586 11.25 13.3978C12.0489 12.9355 12.9904 12.7846 13.8937 12.974C14.1112 12.668 14.2987 12.3418 14.4547 12.0005C13.8393 11.3131 13.4993 10.4227 13.5 9.5C13.5 8.555 13.8525 7.67225 14.4547 6.9995C14.2976 6.65836 14.1093 6.33248 13.8922 6.026C12.9894 6.21523 12.0486 6.06461 11.25 5.603C10.4508 5.14203 9.84985 4.40224 9.56248 3.5255C9.18823 3.49025 8.81248 3.4895 8.43823 3.52475C8.15068 4.40161 7.54949 5.14142 6.74998 5.60225C5.95107 6.06449 5.00959 6.21539 4.10623 6.026C3.88916 6.33221 3.70133 6.65815 3.54523 6.9995C4.16066 7.68692 4.50065 8.57734 4.49998 9.5C4.49998 10.445 4.14748 11.3278 3.54523 12.0005C3.70234 12.3416 3.89064 12.6675 4.10773 12.974C5.01052 12.7848 5.95139 12.9354 6.74998 13.397ZM8.99998 11.75C8.40325 11.75 7.83095 11.5129 7.40899 11.091C6.98704 10.669 6.74998 10.0967 6.74998 9.5C6.74998 8.90326 6.98704 8.33097 7.40899 7.90901C7.83095 7.48705 8.40325 7.25 8.99998 7.25C9.59672 7.25 10.169 7.48705 10.591 7.90901C11.0129 8.33097 11.25 8.90326 11.25 9.5C11.25 10.0967 11.0129 10.669 10.591 11.091C10.169 11.5129 9.59672 11.75 8.99998 11.75ZM8.99998 10.25C9.1989 10.25 9.38966 10.171 9.53031 10.0303C9.67097 9.88968 9.74998 9.69891 9.74998 9.5C9.74998 9.30109 9.67097 9.11032 9.53031 8.96967C9.38966 8.82902 9.1989 8.75 8.99998 8.75C8.80107 8.75 8.61031 8.82902 8.46965 8.96967C8.329 9.11032 8.24998 9.30109 8.24998 9.5C8.24998 9.69891 8.329 9.88968 8.46965 10.0303C8.61031 10.171 8.80107 10.25 8.99998 10.25Z"
                      className="fill-grey-400"
                    />
                  </svg>

                  <span>Settings</span>
                </SecondaryMenuLink>

                <SecondaryMenuLink href="#">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_117_2320)">
                      <path
                        d="M16.5 15.5H1.5V14H2.25V8.77325C2.25 5.03225 5.2725 2 9 2C12.7275 2 15.75 5.03225 15.75 8.77325V14H16.5V15.5ZM3.75 14H14.25V8.77325C14.25 5.861 11.8995 3.5 9 3.5C6.1005 3.5 3.75 5.861 3.75 8.77325V14ZM7.125 16.25H10.875C10.875 16.7473 10.6775 17.2242 10.3258 17.5758C9.97419 17.9275 9.49728 18.125 9 18.125C8.50272 18.125 8.02581 17.9275 7.67417 17.5758C7.32254 17.2242 7.125 16.7473 7.125 16.25Z"
                        fill="#26272B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_117_2320">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>Notifications</span>
                </SecondaryMenuLink>
              </div>
            </nav>

            <div>
              <button className="flex w-full items-center bg-white px-5 py-[19.5px] font-medium text-grey-400 transition hover:bg-green-100">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-dashed border-grey-300 text-xs">
                  B
                </span>
                <span className="ml-2 mr-auto text-sm">Gbadebo N</span>
                <span className="inline-flex h-6 w-6 items-center justify-center">
                  <svg
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.292864 0.792893C-0.09766 1.18342 -0.09766 1.81658 0.292864 2.20711L4.58576 6.5L0.292865 10.7929C-0.0976597 11.1834 -0.0976597 11.8166 0.292865 12.2071C0.683389 12.5976 1.31655 12.5976 1.70708 12.2071L7.41418 6.5L1.70708 0.792893C1.31655 0.402369 0.683388 0.402369 0.292864 0.792893Z"
                      className="fill-grey-100"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
