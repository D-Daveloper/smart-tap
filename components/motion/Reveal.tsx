"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

type RevealProps = {
  children: ReactNode;
  /** Stagger in seconds. */
  delay?: number;
  /** Rendered element — `figure`, `details`, `p`… default `div`. */
  as?: ElementType;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "children" | "className"> &
  Record<string, unknown>;

export function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }: RevealProps) {
  const ref = useReveal<HTMLElement>(delay);
  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
