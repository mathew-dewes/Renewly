"use client"

import Button from "@/components/ui/Button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { updateRenewal } from "@/server/mutations/renewals";
import { renewalSchema } from "@/server/mutations/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";




type FormFields = z.infer<typeof renewalSchema>


export default function UpdateRenewalForm({ assetId, renewalDate }:
  { renewalDate: Date, assetId: string }) {

  const [serverError, setServerError] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const router = useRouter();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({
    resolver: zodResolver(renewalSchema),
    defaultValues: {
      id: assetId,
      renewalDate: renewalDate ? new Date(renewalDate).toISOString().split("T")[0] : "",
    }

  });

  const onSubmit = async (values: FormFields) => {

    const oldDate = new Date(renewalDate).getTime();
    const newDate = new Date(values.renewalDate).getTime();

    if (oldDate === newDate) {
      router.push("/renewals");
      return
    }

    const result = await updateRenewal(values);
    if (result?.status === "error") {
      setServerError(result.message)
      console.log(result.message);
    } else {

      router.push("/renewals");
    }


  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {serverError && <ErrorMessage message={serverError} />}
      <div className="flex items-center gap-5 mt-5 flex-wrap">
        <div className="flex items-center gap-2">
          <p className="font-semibold">Renewal date:</p>
          <input {...register("renewalDate")} min={today} className="border p-2 rounded bg-white" type="date" />

        </div>
      </div>
      <div className="mt-10">
        <Button text={isSubmitting ? "Updating" : "Update"} />
      </div>
      <div className="mt-5">
        {serverError && <ErrorMessage message={serverError} />}
        {errors.renewalDate && <ErrorMessage message={errors.renewalDate?.message} />}
      </div>



    </form>
  )
}