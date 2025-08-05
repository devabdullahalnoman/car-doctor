import Image from "next/image";
import React from "react";
import dbConnect from "@/lib/dbConnect";
import { collectionNamesObj } from "@/lib/dbConnect";
import { FaArrowRight } from "react-icons/fa";

export default async function ServicesSection() {
  const data = await dbConnect(collectionNamesObj.servicesCollection)
    .find({})
    .toArray();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5 xl:gap-10 my-20">
      {data.map((item) => {
        return (
          <div
            key={item.service_id}
            className="w-full border-2 border-gray-200 p-4 rounded-2xl"
          >
            <Image
              src={item.img}
              width={350}
              height={350}
              alt={item.title || "Service Image"}
              className="rounded-2xl w-full h-9/12 object-cover"
            />
            <div className="flex justify-between items-center mt-5 lg:mt-10">
              <div>
                <h3 className="text-xl font-bold text-gray-600">
                  {item.title}
                </h3>
                <p className="text-lg font-bold text-orange-600">
                  Price: ${item.price}
                </p>
              </div>
              <FaArrowRight />
            </div>
          </div>
        );
      })}
    </div>
  );
}
