export const content = {
  company: {
    name: "Joe's Roofing",
    address: "Nashville, TN",
    phone: "(123) 456-7890",
    license: "1234567",
    yearEstablished: "1973",
    officeHours: {
      weekday: "Mon - Fri, 8:00 am - 5:00 pm",
      saturday: "Saturdays, 8:00 am - 12:00 nn"
    }
  },

  navigation: {
    services: [
      { name: "Roofing Services", href: "/products/residential" },
      { name: "Commercial Roofing", href: "/products/commercial" },
      { name: "Roof Repair", href: "/products/repair" },
      { name: "Roof Maintenance", href: "/products/maintenance" }
    ],
    links: [
      { name: "Services", href: "/services", dropdown: true },
      { name: "Service Areas", href: "/service-areas" },
      { name: "Financing", href: "/financing" },
      { name: "About", href: "/about" }
    ]
  },

  hero: {
    title: "Professional Roofing Services",
    subtitle: "Expert roofing solutions for residential and commercial properties",
    image: {
      src: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8",
      alt: "Professional roofing services"
    }
  },

  introduction: {
    title: "Your Trusted Partner in Roofing Excellence",
    content: "With over two decades of experience in the roofing industry, we've built our reputation on quality craftsmanship, exceptional customer service, and unwavering integrity."
  },

  services: {
    title: "Our Services",
    items: [
      {
        title: "Residential Roofing",
        description: "Complete roofing solutions for your home",
        image: "/images/residential.jpg"
      },
      {
        title: "Commercial Roofing",
        description: "Expert commercial roofing services",
        image: "/images/commercial.jpg"
      }
    ]
  },

  serviceAreas: {
    title: "Areas We Serve",
    description: "Providing quality roofing services across the region",
    locations: [
      "Brentwood",
      "Clarksville",
      "Gallatin",
      "Green Hills",
      "Hendersonville",
      "Lebanon",
      "Mount Juliet",
      "Murfreesboro",
      "Springfield"
    ]
  },

  footer: {
    copyright: "© 2024 Joe's Roofing. All rights reserved.",
    links: {
      privacy: "/privacy",
      sitemap: "/sitemap"
    }
  }
};