export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GMPKit, LLC",
    image: "https://www.gmpkit.com/gmpkit-logo.svg",
    "@id": "https://www.gmpkit.com",
    url: "https://www.gmpkit.com",
    telephone: "+1-817-381-8767",
    address: {
      "@type": "PostalAddress",
      streetAddress: "14571 N Kelsey St, STE 105, PMB 146",
      addressLocality: "Monroe",
      addressRegion: "WA",
      postalCode: "98272",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.8556,
      longitude: -121.9706,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    sameAs: [
      // Add social media URLs when available
    ],
    priceRange: "$$",
    description:
      "Professional batch manufacturing operations consulting and software solutions for pharmaceutical, biotech, and manufacturing companies.",
    serviceArea: {
      "@type": "Place",
      name: "Worldwide",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
