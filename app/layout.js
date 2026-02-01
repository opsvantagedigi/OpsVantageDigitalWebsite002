// Governance Note: This is the root layout for all pages. It sets up global styles, header, and footer.
// Maintenance: Update metadata and global imports as branding or navigation changes. Ensure teachability for future maintainers.
// Legacy Alignment: Follows "Stewardship" and "Clarity" pillars. All layout logic is explicit and commented.
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VercelAnalytics from "./vercel-analytics";

export const metadata = {
  title: "OpsVantage — Revenue Acceleration Infrastructure",
  description:
    "Productized systems that scale predictable revenue for B2B SaaS and service businesses.",
};

// Provide favicon/icon metadata so browsers and crawlers see the correct file
export const icons = {
  icon: "/favicon.svg",
  shortcut: "/favicon.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* Speed Insights integration removed to avoid build-time module error. Re-add after installing @vercel/speed-insights/next or using dynamic import. */}
        <main>{children}</main>
        <Footer />
        {/* Real-user metrics: Vercel Analytics */}
        {process.env.NODE_ENV === "production" && <VercelAnalytics />}
      </body>
    </html>
  );
}
