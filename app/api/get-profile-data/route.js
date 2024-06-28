import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "/profileData/profileData.json");

  const data = await fs.promises.readFile(filePath, "utf-8");


  console.log('data in api -- ', JSON.parse(data));
  return NextResponse.json(JSON.parse(data));
}
