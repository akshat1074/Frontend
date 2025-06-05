import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
                <Navbar />
                {children}
        </ThemeProvider>
    );
};

export default DashboardLayout;