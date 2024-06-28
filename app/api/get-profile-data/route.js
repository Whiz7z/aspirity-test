import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  let path;
  try {
    console.log("process.cwd -- ", process.cwd());
    const filePath = path.join(process.cwd(), "/profileData/profileData.json");
    path = filePath;

    console.log("filepath -- ", filePath);

    const data = await fs.promises.readFile(filePath, "utf-8");

    console.log("data in api -- ", JSON.parse(data));
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error("Error reading file:", error);
    return NextResponse.json(
      { success: false, message: "Failed to read profile data.", path: path },
      { status: 500 }
    );
  }
}
