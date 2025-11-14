import React from "react";
import { style } from "@vanilla-extract/css";

const button = style({
  backgroundColor: "bg-background-default",
  color: "text-primary-main",
  padding: "p-md p-lg",
  borderRadius: "rounded-md",
  fontWeight: "font-weight-medium",
  ":hover": { opacity: 0.9 },
});

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: React.PropsWithChildren<ButtonProps>) {
  return <button className={button}>{children}</button>;
}
