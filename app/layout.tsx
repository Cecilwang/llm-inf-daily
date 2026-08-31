import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "LLM Inference Daily",
  description: "A daily engineering digest of high-signal LLM inference research, repositories, and systems work.",
  other: {"codex-preview":"development"},
  icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
  return <html lang="en"><body>{children}</body></html>;
}
