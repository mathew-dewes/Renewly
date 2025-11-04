

import z from "zod";
import { AssetType, Location, RenewalType } from "@prisma/client";


const locations = Object.values(Location);

export const assetSchema = z.object({
  id:z.string().optional(),
  asset: z.string().min(1, "Asset name is required").max(20, "Asset name must be 20 characters or less"),
  plant: z.string().min(3, "Plant number must be 3 or more characters").max(6, "Plant number must be 6 characters or less"),
  location: z.enum(locations),
  assetType: z.enum(AssetType),
  renewalType: z.enum(RenewalType),
  serialNumber:z.string().min(4, "Serial number needs to be 4 or more characters").max(10, "Serial number must be less than 10 characters"),
  renewalDate:z.iso.date("Renewal date is required")

});

export const renewalSchema = z.object({
  id: z.string().optional(),
  renewalDate: z.iso.date("Renewal date is required in order to update"),
});