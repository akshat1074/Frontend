
import { ThemeProvider } from "@/components/ui/theme-provider";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
                
                {children}
        </ThemeProvider>
    );
};

export default DashboardLayout;