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
import { Location } from "@prisma/client";
const today = new Date().toISOString().split("T")[0];


const locations = Object.values(Location);






type FormFields = z.infer<typeof assetSchema>

export default function AssetForm() {
  const router = useRouter();

  const [serverError, setServerError] = useState("");



  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({ resolver: zodResolver(assetSchema), });

  const onSubmit = async (values: FormFields) => {


    const result = await createAsset(values);
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

       <div className="flex flex-col gap-2 w-full md:w-1/2">
        <label>Location</label>

        <select {...register("location")} className="border p-1 bg-white rounded cursor-pointer">

          {locations?.map((type, key) => (
            <option className="text-black" key={key} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.location &&
          <ErrorMessage message={errors.location?.message as string} />}
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



      <div className="mt-5">
        <Button text={isSubmitting ? "Submitting" : "Submit"} />

      </div>



    </form>
  )
}