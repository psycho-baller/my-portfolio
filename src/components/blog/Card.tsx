import clsx from "clsx";
import type { AnchorHTMLAttributes, ElementType, HTMLAttributes, ReactNode, SVGProps } from "react";

interface ChevronRightIconProps extends SVGProps<SVGSVGElement> {}

function ChevronRightIcon(props: ChevronRightIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface CardProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function Card({ as: Component = "div", className, children }: CardProps) {
  return <Component className={clsx(className, "group relative flex flex-col items-start")}>{children}</Component>;
}

interface CardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

Card.Link = function CardLink({ children, ...props }: CardLinkProps) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <a {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </a>
    </>
  );
};

interface CardTitleProps {
  as?: ElementType;
  href?: string;
  children: ReactNode;
}

Card.Title = function CardTitle({ as: Component = "h2", href, children }: CardTitleProps) {
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

interface CardDescriptionProps {
  children: ReactNode;
}

Card.Description = function CardDescription({ children }: CardDescriptionProps) {
  return <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{children}</p>;
};

interface CardCtaProps {
  children: ReactNode;
}

Card.Cta = function CardCta({ children }: CardCtaProps) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

interface CardEyebrowProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  decorate?: boolean;
  children: ReactNode;
}

Card.Eyebrow = function CardEyebrow({
  as: Component = "p",
  decorate = false,
  className,
  children,
  ...props
}: CardEyebrowProps) {
  return (
    <Component
      className={clsx(
        className,
        "relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500",
        decorate && "pl-3.5"
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
};