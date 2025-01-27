import React, { useEffect } from "react";
import { MapPin, Car } from "lucide-react";

// TypeScript declarations for Google Maps
declare global {
  interface Window {
    google: typeof google;
    initMap?: () => void; // Make initMap optional
  }
}

export const LocationSection = () => {
  // Ceremony location coordinates
  const destination = { lat: -27.9749, lng: 151.5797 }; // Coordinates for Leyburn
  const origin = { lat: -27.4698, lng: 153.0251 }; // Coordinates for Brisbane
  const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    // Declare initMap on the window object
    window.initMap = initMap;

    // Load Google Maps JavaScript API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Now TypeScript knows initMap is optional and can be deleted
      delete window.initMap;
    };
  }, []);

  const initMap = () => {
    const mapElement = document.getElementById("map");
    if (!mapElement || !window.google) return;

    const map = new window.google.maps.Map(mapElement, {
      zoom: 9,
      center: destination,
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true,
      zoomControl: true,
    });

    // Add marker for ceremony location
    new window.google.maps.Marker({
      position: destination,
      map: map,
      title: "Ceremony Location",
    });

    // Create DirectionsService and DirectionsRenderer
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      map: map,
      suppressMarkers: false,
    });

    // Request directions from Brisbane to Leyburn
    const request: google.maps.DirectionsRequest = {
      origin: origin,
      destination: "5876 Toowoomba Karara Road, Leyburn, QLD 4365",
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK && result) {
        directionsRenderer.setDirections(result);
      }
    });
  };

  return (
    <>
      {/* Location Details */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-6">
          <MapPin className="w-8 h-8 text-pink-400 mr-4" />
          <h3 className="text-xl font-serif text-gray-700">Event Locations</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ceremony Location */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-serif text-gray-700 text-center mb-4">
              Ceremony & After Party
            </h4>
            <p className="text-center text-gray-600">Mum's Farm House</p>
            <p className="text-center text-gray-600">
              5876 Toowoomba Karara Rd
            </p>
            <p className="text-center text-gray-600">Leyburn, QLD 4365</p>
          </div>

          {/* Reception Location */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-serif text-gray-700 text-center mb-4">
              Reception
            </h4>
            <p className="text-center text-gray-600">CWA Community Hall</p>
            <p className="text-center text-gray-600">89 MacIntyre St</p>
            <p className="text-center text-gray-600">Leyburn, QLD 4365</p>
          </div>

          {/* Drive Times Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              {/* <Car className="w-6 h-6 text-pink-400 mr-2" /> */}
              <h4 className="text-lg font-serif text-gray-700">Drive Times</h4>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <p className="font-medium text-gray-700">From Brisbane</p>
                <p className="text-gray-600">2 hours 30 minutes</p>
              </div>
              <div className="text-center">
                <p className="font-medium text-gray-700">From Sunshine Coast</p>
                <p className="text-gray-600">3 hours 30 minutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Link - Full Width */}
        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps/dir/Brisbane/5876+Toowoomba+Karara+Rd,+Leyburn+QLD+4365"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 underline"
          >
            Open in Google Maps
          </a>
        </div>
      </div>

      {/* Map Container */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div
          id="map"
          className="w-full h-96 rounded-lg"
          style={{ minHeight: "400px" }}
        />
      </div>
    </>
  );
};

export default LocationSection;
