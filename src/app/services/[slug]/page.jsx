import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import React from "react";

export default async function ServiceDetailsPage({ params }) {
  const p = await params;
  const data = await dbConnect(collectionNamesObj.servicesCollection).findOne({
    _id: new ObjectId(p.slug),
  });
  return (
    <div>
      <h1>ServiceDetailsPage</h1>
      <p>{p.slug}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
