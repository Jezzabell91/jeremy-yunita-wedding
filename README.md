# Jeremy & Yunita's Wedding Website

A Next.js-based wedding website created to share details about Jeremy and Yunita's wedding celebration on May 5th, 2025. The website provides essential information for guests, including ceremony details, accommodations, and an RSVP system.

## Features

- Responsive design that works on both mobile and desktop devices
- Interactive photo carousel showcasing the couple's journey
- Dynamic countdown to the wedding day
- Google Maps integration for venue locations
- Detailed information about:
  - Ceremony and reception venues
  - Accommodation options (including camping details)
  - RSVP instructions
  - Wishing well information
  - Frequently asked questions
- Image gallery with touch support for mobile devices

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Lucide Icons
- Google Maps API
- React Hooks
- Responsive Images with Next/Image

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows a component-based architecture with the following key files:

- `page.tsx` - Main page component
- `HeroSection.tsx` - Landing page hero section
- `CeremonyDetails.tsx` - Wedding ceremony information
- `LocationSection.tsx` - Venue locations and maps
- `AccommodationSection.tsx` - Accommodation details
- `PhotoCarousel.tsx` - Photo gallery component
- `FAQ.tsx` - Frequently asked questions
- `RSVPSection.tsx` - RSVP information

## Environment Variables

The following environment variables are required:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## Deployment

The site can be deployed using the [Vercel Platform](https://vercel.com/new). Simply:

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Add required environment variables
4. Deploy

## Local Development

To add new photos to the gallery:

1. Add images to the `/public/images` directory
2. Update the `galleryItems` array in `Gallery.tsx`
3. Images should be in webp or jpg format for optimal performance

## License

This project is private and not licensed for public use.
