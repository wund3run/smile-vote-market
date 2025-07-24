import { Link } from "react-router-dom";
import { Button } from "./button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";

const solutions = [
  {
    title: "Marketplace",
    href: "/marketplace",
    description: "Access dental supplies, equipment, and services at competitive prices.",
    items: [
      { name: "Bulk Purchasing", href: "/marketplace?type=bulk" },
      { name: "Group Buying", href: "/marketplace?type=group" },
      { name: "Subscriptions", href: "/marketplace?type=subscription" },
      { name: "Equipment", href: "/marketplace?category=equipment" },
    ]
  },
  {
    title: "Practice Management",
    href: "/practice",
    description: "Tools and resources to streamline your dental practice operations.",
    items: [
      { name: "Staff Management", href: "/staff" },
      { name: "Insurance Tools", href: "/insurance" },
      { name: "Compliance", href: "/compliance" },
      { name: "Analytics", href: "/analytics" },
    ]
  },
  {
    title: "Patient Care",
    href: "/patient-care",
    description: "Enhance patient experience and treatment delivery.",
    items: [
      { name: "Teledentistry", href: "/teledentistry" },
      { name: "Patient Education", href: "/education" },
      { name: "Communication", href: "/communication" },
      { name: "Preventive Care", href: "/preventive" },
    ]
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              DentalMarket
            </span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              {solutions.map((solution) => (
                <NavigationMenuItem key={solution.title}>
                  <NavigationMenuTrigger>{solution.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px]">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-medium leading-none">{solution.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {solution.description}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {solution.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
