"use client";
import React, { useEffect, useState } from "react";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import { announcements } from "@/api/dashboard/dashboard";
import { FeatureAnnouncements } from "@/types/feature";

const Feature = () => {
  const [announcementData, setAnnouncementData] =
    useState<FeatureAnnouncements[]>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const data = await announcements();
        setAnnouncementData(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchAnnouncements();
  }, []);

  if (error) {
    return null;
  }

  if (!announcementData) {
    return (
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="flex h-96 items-center justify-center">
          <svg
            className="h-10 w-10 animate-spin text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z"
            />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <>
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "EntropiuX",
              subtitle: "Primer servidor de World of Warcraft The War Within",
              description: `Disfruta de una experiencia fluida y sin interrupciones, con una infraestructura sólida y mínima latencia.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {announcementData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
