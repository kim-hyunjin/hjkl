import { tv } from "tailwind-variants";

export const collapsibleRoot = tv({
  base: "bg-muted border border-border rounded-lg p-4 my-3",
});

export const collapsibleTrigger = tv({
  base: "group flex w-full items-center justify-between gap-2 cursor-pointer font-semibold text-muted-foreground text-left data-[state=open]:text-foreground data-[state=open]:mb-2",
});

export const collapsiblePanel = tv({
  base: "pt-1",
});
