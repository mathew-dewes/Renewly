"use client"

import Button from "@/components/ui/Button"



import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod"
import ErrorMessage from "../../../../components/ui/ErrorMessage";
import { assetTypes, renewalTypes } from "../../variables/constants";
import { assetSchema } from "@/server/mutations/schemas";
import { createAsset } from "@/server/mutations/assets";
import { ImageUploader } from "./ImageUploader";
import { useUploadThing } from "@/server/config/uploadthing";
import imageCompression from "browser-image-compression";
const today = new Date().toISOString().split("T")[0];





type FormFields = z.infer<typeof assetSchema>

export default function AssetForm() {
  const router = useRouter();

  const [serverError, setServerError] = useState("");
  const [file, setFile] = useState<File | null>(null);


  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: () => {
      setFile(null);

    },

  });

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({ resolver: zodResolver(assetSchema), });

  const onSubmit = async (values: FormFields) => {

    let imageURL = null;
    let upLoadId = null;

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    }

    if (file) {

      try {
        const compressedFile = await imageCompression(file, options);
        console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
        const upload = await startUpload([compressedFile]);
        if (!upload) return;
        imageURL = upload[0].ufsUrl;
        upLoadId = upload[0].serverData.uploadId
        console.log(upload[0].serverData.uploadId);

      } catch (error) {
        console.log(error);
      }




    }

    const result = await createAsset(values, imageURL, upLoadId);
    if (result?.status === "error") {
      setServerError(result.message)
      console.log(result.message);
    } else {

      router.push("/assets");
    }




  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mt-10 flex flex-col gap-3">
      <div>
        <label htmlFor="title" className="block mb-2 text-sm font-medium">
          Asset name
        </label>
        <input {...register("asset")}
          type="text"
          id="title"
          className={`bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5`}

        />
        {errors.asset &&
          <ErrorMessage message={errors.asset?.message} />}
      </div>
      <div>
        <label htmlFor="title" className="block mb-2 text-sm font-medium">
          Plant number
        </label>
        <input {...register("plant")}
          type="text"
          id="title"
          className={`bg-gray-50  border border-gray-300 text-sm active:ring-amber-300 rounded-lg block w-full p-2.5`}

        />
        {errors.plant &&
          <ErrorMessage message={errors.plant?.message} />}
      </div>
      <div>
        <label htmlFor="title" className="block mb-2 text-sm font-medium">
          Serial number / REGO
        </label>
        <input {...register("serialNumber")}
          type="text"
          id="title"
          className={`bg-gray-50 border border-gray-300 text-sm rounded-lg  block w-full p-2.5`}

        />
        {errors.serialNumber &&
          <ErrorMessage message={errors.serialNumber?.message} />}
      </div>
      <div>
        <label htmlFor="title" className="block mb-2 text-sm font-medium">
          Location
        </label>
        <input {...register("location")}
          type="text"
          id="title"
          className={`bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}

        />
        {errors.location &&
          <ErrorMessage message={errors.location?.message} />}
      </div>

      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <label>Asset type</label>

        <select {...register("assetType")} className="border p-1 bg-white rounded cursor-pointer">

          {assetTypes?.map((type, key) => (
            <option className="text-black" key={key} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.assetType &&
          <ErrorMessage message={errors.assetType?.message} />}
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <label>Renewal type</label>

        <select {...register("renewalType")} className="border p-1 bg-white rounded cursor-pointer">

          {renewalTypes?.map((type, key) => (
            <option className="text-black" key={key} value={type.toUpperCase()}>
              {type}
            </option>
          ))}
        </select>
        {errors.assetType &&
          <ErrorMessage message={errors.renewalType?.message} />}
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <label>Renewal Date</label>

        <input {...register("renewalDate")} min={today} className="border p-2 rounded bg-white" type="date" />
        {errors.renewalDate &&
          <ErrorMessage message={errors.renewalDate?.message} />}
      </div>


      <ImageUploader file={file} setFile={setFile} isUploading={isUploading} />



      <div className="mt-5">
        <Button text={isSubmitting ? "Submitting" : "Submit"} />
        <p className="mt-5 text-red-500">{serverError}</p>
      </div>



    </form>
  )
}