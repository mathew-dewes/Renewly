
import { assetTypes, locationTypes, renewalTypes } from "@/app/assets/variables/constants";
import z from "zod";


export const assetSchema = z.object({
  id:z.string().optional(),
  asset: z.string().min(1, "Asset name is required").max(20, "Asset name must be less than 20 charaters"),
  plant: z.string().min(3, "Plant number is must be 3 or more charaters").max(6, "Plant number must be less than 6 charaters"),
  location: z.enum(locationTypes),
  assetType: z.enum(assetTypes),
  renewalType: z.enum(renewalTypes),
  serialNumber:z.string().min(4, "Serial number needs to be 4 or more charaters").max(10, "Serial number must be less than 10 charaters"),
  renewalDate:z.iso.date("Renewal date is required")

});