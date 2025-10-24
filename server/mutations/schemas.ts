import { AssetType } from "@prisma/client";
import z from "zod";

export const assetSchema = z.object({
  asset: z.string().min(1, "Asset name is required").max(10, "Asset name must be less than 10 charaters"),
  plant: z.string().min(3, "Plant number is must be 3 or more charaters").max(6, "Plant number must be less than 6 charaters"),
  location: z.string().min(1, "Location is required").max(10, "Location must be less than 10 charaters"),
  assetType: z.nativeEnum(AssetType),
  serialNumber:z.string().min(4, "Serial number needs to be 4 or more charaters").max(10, "Serial number must be less than 10 charaters"),

});