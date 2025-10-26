"use client"

import Button from "@/components/ui/Button"

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod"

import { assetSchema } from "@/server/mutations/schemas";
import {  updateAsset } from "@/server/mutations/assets";

import { useUploadThing } from "@/server/config/uploadthing";
import imageCompression from "browser-image-compression";
import { options } from "@/server/config/image";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { assetTypes, renewalTypes } from "@/app/assets/variables/constants";
import { ImageUploader } from "@/app/assets/add/_components/ImageUploader";
import { AssetType, RenewalType } from "@prisma/client";
const today = new Date().toISOString().split("T")[0];


type assetValues = {
    id:string,
    name: string,
    plantNumber: string,
    serial: string,
    location: string
    type: AssetType,
    imageUrl: string | null,
    renewals:{
        renewalType:RenewalType, renewalDate: Date
    }[]
}

type FormFields = z.infer<typeof assetSchema>

export default function EditAssetForm({values}:
    {values: assetValues | null}
) {
  const router = useRouter();



  const [serverError, setServerError] = useState("");
  const [file, setFile] = useState<File | null>(null);


  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: () => {
      setFile(null);

    },

  });

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({ resolver: zodResolver(assetSchema),
    defaultValues:{
        id: values?.id,
        asset: values?.name,
        plant: values?.plantNumber,
        serialNumber: values?.serial,
        location: values?.location,
        assetType: values?.type,
        renewalType: values?.renewals[0].renewalType,
        renewalDate: values?.renewals[0].renewalDate
  ? new Date(values.renewals[0].renewalDate).toISOString().split("T")[0]
  : ""
    }
   });

  const onSubmit = async (values: FormFields) => {

    let imageURL = null;
    let upLoadId = null;


    if (file) {

      try {
        const compressedFile = await imageCompression(file, options);
        const upload = await startUpload([compressedFile]);
        if (!upload) return;
        imageURL = upload[0].ufsUrl;
        upLoadId = upload[0].serverData.uploadId

      } catch (error) {
        console.log(error);
      }




    }

    const result = await updateAsset(values, imageURL, upLoadId);
    if (result?.status === "error") {
      setServerError(result.message)
      console.log(result.message);
    } else {

      router.push("/assets");
    }




  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mt-10 flex flex-col gap-3">
      {serverError && <ErrorMessage message={serverError}/>}
      <div>
        <label htmlFor="title" className="block mb-2 text-sm font-medium">
          Asset name
        </label>
        <input {...register("asset")}
          type="text"
          id="title"
          className={`bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5`}

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
          className={`bg-gray-50  border uppercase border-gray-300 text-sm active:ring-amber-300 rounded-lg block w-full p-2.5`}

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
          className={`bg-gray-50 border uppercase border-gray-300 text-sm rounded-lg  block w-full p-2.5`}

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
          className={`bg-gray-50 border uppercase border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}

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


      <ImageUploader savedImage={values?.imageUrl} file={file} setFile={setFile} isUploading={isUploading} />



      <div className="mt-5">
        <Button text={isSubmitting ? "Updating" : "Update"} />

      </div>



    </form>
  )
}