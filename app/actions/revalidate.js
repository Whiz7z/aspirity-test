"use server";

import { revalidateTag } from "next/cache";

import { redirect } from "next/navigation";
import fs from "fs";
import path from "path";

export async function editProfileAction(data) {
  const filePath = path.join(process.cwd(), "profileData", "profileData.json");

  // Ensure the directory exists
  if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
  }

  try {
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
    console.log("File written successfully");
  } catch (err) {
    console.error("Error writing to file", err);
    return {
      success: false,
      message: "Error writing to file",
    };
  }

  revalidateTag("profile");
  redirect("/profile");
}
