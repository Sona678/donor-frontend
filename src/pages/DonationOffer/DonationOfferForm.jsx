import React from "react";
import { useForm } from "react-hook-form";
import slugTransform from "../../../utils/slugTransform.js";
import { useNavigate } from "react-router-dom";
import { donationOfferService } from "./services/donationOfferService.js";
import { Input, Select } from ".../index.jsx";
import Button from "../../Button.jsx";

const DonationOfferForm = ({ post }) => {
  const navigate = useNavigate();
  const { handleSubmit, register, watch, setValue } = useForm({
    defaultValues: {
      bloodGroup: post?.bloodGroup || "",
      district: post?.district || "",
      slug: post?.slug || "",
    },
  });

  const submit = async (data) => {
    if (post) {
      const dbPost = await donationOfferService.updateDonationOffer(
        post._id,
        data,
      );
      if (dbPost) {
        navigate(`/post/${dbPost._id}`);
      }
    } else {
      const dbPost = await donationOfferService.createDonationOffer(data);
      if (dbPost) {
        navigate(`/post/${dbPost._id}`);
      }
    }
  };

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "bloodGroup" || name === "district") {
        const slugValue = `${value.bloodGroup || ""} ${value.district || ""}`;

        setValue("slug", slugTransform(slugValue));
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Select
          label="Blood Group"
          placeholder="Select your blood group."
          options={["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"]}
          className="mb-4"
          {...register("bloodGroup", { required: "Blood Group is required." })}
        />

        <Input
          label="District"
          placeholder="District"
          className="mb-4"
          {...register("district", { required: true })}
        />

        <Input
          label="Hospital"
          placeholder="Hospital to donate blood"
          className="mb-4"
          {...register("hospital")}
        />

        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            defaultChecked={post?.isAvailable ?? true}
            {...register("isAvailable")}
          />
          Available for donation
        </label>

        <Input
          label="Message"
          placeholder="Note messages"
          className="mb-4"
          {...register("message")}
        />

        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Submit" : "Update"}
        </Button>
      </div>
    </form>
  );
};

export default DonationOfferForm;
