"use client";

import { useEffect, useRef } from "react";

const locations = [
  {
    city: "Goma",
    role: "Headquarters & main operational center",
    lat: -1.6777,
    lng: 29.2285,
  },
  {
    city: "Rutshuru",
    role: "Community Development & Peace-Building",
    lat: -1.1833,
    lng: 29.45,
  },
  {
    city: "Masisi",
    role: "Psychosocial Support & Advocacy",
    lat: -1.3964,
    lng: 28.8083,
  },
  {
    city: "Walikale",
    role: "Environmental Protection & Community Health",
    lat: -1.4333,
    lng: 28.0333,
  },
  {
    city: "Beni",
    role: "Relief Operations & Community Empowerment",
    lat: 0.4869,
    lng: 29.4736,
  },
];

export default function DRCMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    let aborted = false;

    // Dynamically import leaflet to avoid SSR issues
    import("leaflet").then((L) => {
      if (aborted || !mapRef.current) return;
      // Guard against StrictMode double-init
      if ((mapRef.current as any)._leaflet_id) return;

      import("leaflet/dist/leaflet.css");

      const map = L.map(mapRef.current, {
        center: [-0.8, 29.0],
        zoom: 8,
        scrollWheelZoom: false,
      });

      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Custom purple marker icon
      const markerIcon = L.divIcon({
        className: "",
        html: `<div style="
          width: 14px;
          height: 14px;
          background: #4845A5;
          border: 3px solid #17153B;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.4);
        "></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
        popupAnchor: [0, -10],
      });

      // Headquarters gets a larger marker
      const hqIcon = L.divIcon({
        className: "",
        html: `<div style="
          width: 20px;
          height: 20px;
          background: #2D2A7A;
          border: 3px solid #C4B5D9;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.5);
        "></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        popupAnchor: [0, -12],
      });

      locations.forEach((loc) => {
        const icon = loc.city === "Goma" ? hqIcon : markerIcon;
        L.marker([loc.lat, loc.lng], { icon })
          .addTo(map)
          .bindPopup(
            `<div style="font-family:sans-serif;min-width:160px">
              <div style="font-weight:700;color:#17153B;font-size:15px;margin-bottom:4px">${loc.city}</div>
              <div style="color:#525560;font-size:12px;line-height:1.4">${loc.role}</div>
            </div>`,
            { closeButton: false }
          );
      });
    });

    return () => {
      aborted = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: "480px", width: "100%", borderRadius: "20px", overflow: "hidden" }}
    />
  );
}
