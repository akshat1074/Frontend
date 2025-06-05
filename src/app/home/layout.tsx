import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="max-w-[90vw] mx-auto">
                <Navbar />
                {children}
            </div>
        </ThemeProvider>
    );
};

export default HomeLayout;