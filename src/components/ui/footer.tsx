import { Link } from "react-router-dom";

const footerLinks = {
  solutions: {
    title: "Solutions",
    items: [
      { name: "Marketplace", href: "/marketplace" },
      { name: "Staff Management", href: "/staff" },
      { name: "Insurance Tools", href: "/insurance" },
      { name: "Teledentistry", href: "/teledentistry" },
      { name: "Compliance", href: "/compliance" },
    ],
  },
  support: {
    title: "Support",
    items: [
      { name: "Help Center", href: "/support" },
      { name: "Documentation", href: "/docs" },
      { name: "API", href: "/api" },
      { name: "Contact", href: "/contact" },
    ],
  },
  company: {
    title: "Company",
    items: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Partners", href: "/partners" },
    ],
  },
  legal: {
    title: "Legal",
    items: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Security", href: "/security" },
      { name: "Compliance", href: "/compliance" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-base font-medium">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-center">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                DentalMarket
              </span>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} DentalMarket. All rights reserved.
            </div>
            <div className="flex justify-end space-x-6">
              <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                Twitter
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                LinkedIn
              </a>
              <a href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
