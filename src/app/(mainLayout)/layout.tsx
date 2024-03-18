import BottomNavigation from "@/components/backNavigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <BottomNavigation />
        </>
    );
}
