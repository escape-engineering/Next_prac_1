import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
    title: {
        template: "%s | Next Pages",
        default: "Loading...",
    },
    description: "NextJS 연습페이지입니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
