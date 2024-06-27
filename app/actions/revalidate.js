"use server";

import { revalidateTag } from "next/cache";

import { redirect } from "next/navigation";
import fs from "fs";
import path from "path";

export async function editProfileAction(data) {

  const filePath = path.join(process.cwd(), "public/profileData/profileData.json");

  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error("Error writing to file", err);
    }
  });

  revalidateTag("profile", "page");
  redirect("/profile");
}
