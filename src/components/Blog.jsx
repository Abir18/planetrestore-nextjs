import {Button} from "@/components/ui/button";
import {ArrowUpRight, Mail, Phone} from "lucide-react";
import Image from "next/image";
import tornodoBanner from "../assets/tornodo-banner.png";
import {Card, CardContent} from "./ui/card";

export default function Blog() {
  const blogPosts = [
    {
      title: "Comprehensive Safety Advice, Cooling Resources",
      excerpt:
        "A heatwave is an extended period of unusually high temperatures, often accomp...",
      date: "23 July 2024",
      author: "Cameron Williamson",
      image: "/blog-img1.png"
    },
    {
      title: "How to Stay Safe, Secure Your Home",
      excerpt:
        "A cyclone is a large-scale air mass that rotates around a quarter of low atmosphe...",
      date: "23 July 2024",
      author: "Cameron Williamson",
      image: "/blog-img2.png"
    },
    {
      title: "How to Protect Livelihoods, Conserve Water",
      excerpt:
        "A flood is an overflow of water that submerges land not covered by water...",
      date: "23 July 2024",
      author: "Cameron Williamson",
      image: "/blog-img3.png"
    },
    {
      title: "Vital Earthquake Preparedness Tips, Emergency Plans",
      excerpt:
        "A heatwave is an extended period of unusually high temperatures, often causing...",
      date: "23 July 2024",
      author: "Cameron Williamson",
      image: "/blog-img4.png"
    }
  ];

  const organizations = [
    {
      name: "Safe Harbor Foundation",
      phone: "+88 01755332942",
      email: "safeharborfound@gmail.com",
      image: "/contact1.png"
    },
    {
      name: "Disaster Relief Network",
      phone: "+88 01755332942",
      email: "disasterreliefnet@gmail.com",
      image: "/contact2.png"
    },
    {
      name: "Safe Harbor Foundation",
      phone: "+88 01755332942",
      email: "safeharborfound@gmail.com",
      image: "/contact1.png"
    },
    {
      name: "Earth Shield Initiative",
      phone: "+88 01755565423",
      email: "earthshieldini@gmail.com",
      image: "/contact3.png"
    },
    {
      name: "Rapid Response Relief",
      phone: "+88 01755657842",
      email: "rapidresponserel123@gmail.com",
      image: "/contact4.png"
    },
    {
      name: "Crisis Care Collective",
      phone: "+88 01755565423",
      email: "crisiscarecol@gmail.com",
      image: "/contact5.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      {/* Tornado Banner */}
      <div className="relative  overflow-hidden rounded-xl p-8 text-white">
        <div className=" right-0 top-0 h-full w-full">
          {/* Animated tornado illustration would go here */}
          <Image src={tornodoBanner} alt="tornodoBanner" />
          <div className="absolute top-[100px] left-[70px] z-10 max-w-xl">
            <h2 className="mb-4 text-3xl font-bold">Tornado</h2>
            <p className="text-white/90">
              Tornadoes are powerful, rapidly rotating columns of air that
              extend from thunderstorms to the ground, capable of causing severe
              destruction. Formed under specific conditions, they bring intense
              winds, often above 200 mph, and can impact communities within
              seconds. Understanding tornado warnings, safety precautions, and
              tracking.
            </p>
          </div>
        </div>
      </div>

      {/* Latest Blog */}
      <section>
        <h2 className="mb-8 text-2xl font-bold">Latest Blog</h2>
        <div className="mb-8 grid gap-8 lg:grid-cols-2">
          <div className="relative h-[600px] max-sm:h-[250px] overflow-hidden rounded-lg">
            <Image
              src="/latest-blog1.png"
              width={400}
              height={400}
              alt="Flood disaster response"
              className="object-cover max-sm:w-[200px] max-sm:h-[150px]"
            />
            <Image
              src="/latest-blog2.png"
              width={400}
              height={400}
              alt="Flood disaster response"
              className="object-cover relative top-[-100px] left-[300px] max-sm:w-[200px] max-sm:h-[150px] max-sm:left-[150px] max-sm:top-[-50px]"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>23 July 2024</span>
              <span>Martin McFlinney</span>
            </div>
            <h3 className="text-2xl font-bold">
              Flood Disaster Response and Preparedness: Critical Guidelines for
              Staying Safe, Protecting Your Home, and Navigating Emergency
              Resources
            </h3>
            <p className="text-gray-600">
              As floods become more frequent and severe, understanding how to
              prepare, respond, and recover is essential. From creating an
              emergency plan to safeguarding your property and knowing where to
              find flood evacuation centers, this comprehensive guide equips you
              with critical information and resources to protect yourself and
              your home during flood emergencies. From creating an emergency
              plan to safeguarding your property and knowing where to find flood
              evacuation centers, this comprehensive guide equips you with
              critical information and resources to protect yourself and your
              home during flood emergencies.
            </p>
            <Button variant="link" className="p-0 text-[#6B5EFF]">
              Read More <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="group space-y-3">
              <div className="relative h-48 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.author}</span>
              </div>
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.excerpt}</p>
              <Button variant="link" className="p-0 text-[#6B5EFF]">
                Read More <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button className="bg-[#6B5EFF] text-white hover:bg-[#5B4EEF]">
            See More Blog <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Contact Organization */}
      <section>
        <h2 className="mb-8 text-2xl font-bold">Contact Organization</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {organizations.map((org, index) => (
            <div key={index} className="relative max-w-md">
              <div className=" h-[400px] w-full overflow-hidden rounded-lg">
                <Image
                  src={org.image}
                  alt="Safe Harbor Foundation team"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
              <Card className="absolute w-11/12 bottom-3 left-4 right-4  bg-white/95 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h3 className="mb-4 text-xl font-semibold">{org.name}</h3>
                  <div className="">
                    <a
                      href="tel:+8801835327629"
                      className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
                    >
                      <Phone className="h-4 w-4" />
                      <span>{org.phone}</span>
                    </a>
                    <a
                      href="mailto:safeharborfoundation@gmail.com"
                      className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
                    >
                      <Mail className="h-4 w-4" />
                      <span>{org.email}</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
