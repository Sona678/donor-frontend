import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-hook-form";
import { bloodRequestService } from "./services/bloodRequestService.js";
import { Input, Select, Button} from ".../index.jsx";
import slugTransform from "../../../utils/slugTransform.js";

const BloodRequestForm = ({ post }) => {
  const { register, handleSubmit, watch,setValue } = useForm({
    defaultValues: {
      bloodGroup: post?.bloodGroup || "",
      urgency: post?.urgency || "",
      hospital: post?.hospital || "",
      district: post?.district || "",
      donationDate: post?.donationDate || "",
      message: post?.message || "",
      slug:post?.slug || ""
    },
  });
  const navigate = useNavigate();

  const submit = async (data) => {
    if (post) {
      const dbPost = await bloodRequestService.updateBloodRequest(
        post._id,
        data,
      );

      if (dbPost) {
        navigate(`/post/${dbPost._id}`);
      }
    } else {
      const dbPost = await bloodRequestService.createBloodRequest(data);

      if (dbPost) {
        navigate(`/post/${dbPost._id}`);
      }
    }
  };

React.useEffect(() => {
  const subscription = watch((value, { name }) => {
    if (
      name === "bloodGroup" ||
      name === "urgency" ||
      name === "district"
    ) {
      const slugValue =
        `${value.bloodGroup || ""} ${value.urgency || ""} ${value.district || ""}`;

      setValue("slug", slugTransform(slugValue));
    }
  });

  return () => subscription.unsubscribe();
}, [watch, slugTransform, setValue])

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

        <Select
          label="Urgency"
          options={["Low", "Medium", "High"]}
          className="mb-4"
          {...register("urgency", { required: true })}
        />

        <Input
          label="Hospital"
          placeholder="Hospital to donate blood"
          className="mb-4"
          {...register("hospital", { required: true })}
        />

        <Input
          label="District"
          placeholder="District"
          className="mb-4"
          {...register("district", { required: true })}
        />

        <Input
          label="Available Date"
          type="date"
          {...register("availableDate")}
        />

        <Input
          label="Message"
          placeholder="Note messages"
          className="mb-4"
          {...register("message")}
        />
      </div>

      <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
    </form>
  );
};

export default BloodRequestForm;
