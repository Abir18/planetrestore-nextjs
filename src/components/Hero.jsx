// import {Button} from "@/components/ui/button";
import {ArrowUpRight, Calendar1} from "lucide-react";
import Image from "next/image";
import weather from "../assets/weather.png";
import {Button} from "./ui/button";

export default function Hero() {
  const recentDisasters = [
    {
      title: "Hurricane Helene: Loss Estimamtes",
      date: "23 July 2024"
    },
    {
      title: "Hurricane Helene: Loss Estimamtes",
      date: "23 July 2024"
    },
    {
      title: "Hurricane Helene: Loss Estimamtes",
      date: "23 July 2024"
    },
    {
      title: "Hurricane Helene: Loss Estimamtes",
      date: "23 July 2024"
    },
    {
      title: "Hurricane Helene: Loss Estimamtes",
      date: "23 July 2024"
    }
  ];

  const disasterTypes = [
    {
      title: "Earthquake",
      description:
        "An earthquake is the sudden shaking of the Earth's surface caused by the release ...",
      image: "/image1.png"
    },
    {
      title: "Tsunami",
      description:
        "A tsunami is a series of large, powerful waves caused primarily by underwater ...",
      image: "/image2.png?height=400&width=600"
    },
    {
      title: "Flood",
      description:
        "An earthquake is the sudden shaking of the Earth's surface caused by the release ...",
      image: "/image3.png"
    },
    {
      title: "Hurricane",
      description:
        "An earthquake is the sudden shaking of the Earth's surface caused by the release ...",
      image: "/image4.png"
    },
    {
      title: "Heatwave",
      description:
        "An earthquake is the sudden shaking of the Earth's surface caused by the release ...",
      image: "/image5.png"
    },
    {
      title: "Cyclone",
      description:
        "A tsunami is a series of large, powerful waves caused primarily by underwater ...",
      image: "/image6.png"
    },
    {
      title: "Droughts",
      description:
        "An earthquake is the sudden shaking of the Earth's surface caused by the release ...",
      image: "/image7.png"
    },
    {
      title: "Typhone",
      description:
        "An earthquake is the sudden shaking of the Earth's surface caused by the release ...",
      image: "/image8.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-[350px,1fr] ">
        <div className="space-y-6 max-sm:order-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[34px] font-bold">Recent Disaster</h2>
            <button variant="link">View all</button>
          </div>
          <div className="space-y-4">
            {recentDisasters.map((disaster, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-50"
              >
                <h3 className=" font-semibold ">{disaster.title}</h3>
                <p className="text-sm text-gray-500">
                  <div className="flex mt-2">
                    <Calendar1 size={18} className="mr-3" />
                    {disaster.date}
                  </div>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Image src={weather} alt="" />
        </div>
        {/* <div className="relative rounded-xl bg-gradient-to-b from-blue-600 to-blue-800 p-6 text-white">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📍</span>
                <span className="text-lg font-medium">Dhaka, Bangladesh</span>
              </div>
              <p className="text-sm opacity-75">Change of: 32% - 37%</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">07:32 AM</div>
              <div>Tuesday</div>
              <div>26 Oct 2024</div>
            </div>
          </div>

          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-white p-4">
                <span className="text-4xl">32°</span>
              </div>
            </div>
            <div>
              <div className="mb-1">Wind: 32mph</div>
              <div className="mb-1">Humidity: 45%</div>
              <div>AQI: 67 Precipitation: 9%</div>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center">
                <div className="mb-2">{day}</div>
                <div className="mx-auto h-24 w-2 rounded-full bg-white/20" />
                <div className="mt-2">🌤️</div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-[34px] font-outfit font-bold">
          Type Of Disaster
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {disasterTypes.map((disaster, index) => (
            <div
              key={index}
              className="group rounded-lg border border-gray-200 p-4"
            >
              <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                <Image
                  src={disaster.image}
                  alt={disaster.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-[26px] font-semibold">
                {disaster.title}
              </h3>
              <p className="mb-4 text-[16px] text-gray-600">
                {disaster.description}
              </p>
              <Button variant="link" className="p-0 text-[#6B5EFF]">
                Read More <ArrowUpRight className=" h-8 w-8" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button className="bg-[#6B5EFF] text-[20px] text-white hover:bg-[#5B4EEF]">
          See More Disaster <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
