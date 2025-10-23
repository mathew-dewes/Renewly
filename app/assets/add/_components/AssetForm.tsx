"use client"

import Button from "@/components/ui/Button"



import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod"
import ErrorMessage from "./ErrorMessage";
import { assetTypes } from "../../variables/constants";
import { assetSchema } from "@/server/mutations/schemas";
import { createAsset } from "@/server/mutations/assets";



type FormFields = z.infer<typeof assetSchema>

export default function AssetForm() {
    const router = useRouter();

  const [serverError, setServerError] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({ resolver: zodResolver(assetSchema) });

  const onSubmit = async (values: FormFields) => {
    const result = await createAsset(values);
    if (result?.status === "error"){
           setServerError(result.message)
            console.log(result.message);
    } else {
         router.push("/assets");
    }

    
 console.log(values);
 

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg  space-y-4 mt-10">
      <div>
        <label htmlFor="title" className="block mb-2 font-medium">
          Asset name
        </label>
        <input {...register("asset")}
          type="text"
          id="title"
          className={`w-full border p-2 rounded bg-white`}

        />
        {errors.asset &&
          <ErrorMessage message={errors.asset?.message} />}
      </div>
      <div>
        <label htmlFor="title" className="block mb-2 font-medium">
          Plant number
        </label>
        <input {...register("plant")}
          type="text"
          id="title"
          className={`w-40 border bg-white p-2 rounded md:w-1/3`}

        />
        {errors.plant &&
          <ErrorMessage message={errors.plant?.message} />}
      </div>
      <div>
        <label htmlFor="title" className="block mb-2 font-medium">
          Serial number / REGO
        </label>
        <input {...register("serialNumber")}
          type="text"
          id="title"
          className={`w-40 border bg-white p-2 rounded md:w-1/3`}

        />
        {errors.serialNumber &&
          <ErrorMessage message={errors.serialNumber?.message} />}
      </div>
      <div>
        <label htmlFor="title" className="block mb-2 font-medium">
          Location
        </label>
        <input {...register("location")}
          type="text"
          id="title"
          className={`w-40 border bg-white p-2 rounded md:w-1/3`}

        />
        {errors.location &&
          <ErrorMessage message={errors.location?.message} />}
      </div>

      <div className="flex flex-col gap-2 w-fit">
        <label>Asset type</label>
     
        <select {...register("assetType")} className="border p-1 bg-white rounded cursor-pointer" id="community" value={undefined}>
  
          {assetTypes?.map((type, key) => (
            <option className="text-black" key={key} value={type.toUpperCase()}>
              {type}
            </option>
          ))}
        </select>
                {errors.assetType &&
          <ErrorMessage message={errors.assetType?.message} />}
      </div>
      <Button  text={isSubmitting ? "Submitting" : "Submit"}  />
            <p className="mt-5 text-red-500">{serverError}</p>


    </form>
  )
}