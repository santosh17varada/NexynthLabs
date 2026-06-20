import Link from "next/link";
import type { ReactNode } from "react";
import {
  buttonBaseClasses,
  buttonSizeClasses,
  buttonVariantClasses,
  type ButtonSize,
  type ButtonVariant,
} from "@/components/ui/variants";
import { cn } from "@/lib/cn";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = SharedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = SharedProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function getClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className: string,
) {
  return cn(
    buttonBaseClasses,
    buttonVariantClasses[variant],
    buttonSizeClasses[size],
    className,
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
  } = props;

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;
    const classes = getClasses(variant, size, className);

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const {
    type = "button",
    disabled,
    ...rest
  } = props as ButtonAsButton;
  const classes = getClasses(variant, size, className);

  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
