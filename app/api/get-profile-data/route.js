import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { get } from "@vercel/edge-config";

export async function GET() {
  const profileData = await get("profileData");
  return NextResponse.json(JSON.parse(profileData));
  let returnPath;
  // try {
  //   console.log("process.cwd -- ", process.cwd());
  //   const filePath = path.join(process.cwd(), "/profileData/profileData.json");
  //   returnPath = filePath;

  //   console.log("filepath -- ", filePath);

  //   const data = await fs.promises.readFile(filePath, "utf-8");

  //   console.log("data in api -- ", JSON.parse(data));
  //   return NextResponse.json(JSON.parse(data));
  // } catch (error) {
  //   console.error("Error reading file:", error);
  //   return NextResponse.json(
  //     {
  //       success: false,
  //       message: "Failed to read profile data.",
  //       path: returnPath,
  //     },
  //     { status: 500 }
  //   );
  }
}


// export async function GET() {
//   let returnPath;
//   try {
//     console.log("process.cwd -- ", process.cwd());
//     const filePath = path.join("/tmp", "profileData", "profileData.json");
//     returnPath = filePath;

//     console.log("filepath -- ", filePath);

//     const data = await fs.promises.readFile(filePath, "utf-8");

//     console.log("data in api -- ", JSON.parse(data));
//     return NextResponse.json(JSON.parse(data));
//   } catch (error) {
//     console.error("Error reading file:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to read profile data.",
//         path: returnPath,
//       },
//       { status: 500 }
//     );
//   }
// }