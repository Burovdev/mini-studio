"use client";

import { useForm } from "react-hook-form";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import Image from "next/image";

export const FormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };
  return (
    <section className="bg-white flex flex-col justify-center px-5 py-12 rounded-l-2xl">
      <h1 className="font-black text-[24px] leading-[32px] text-[#3E3ED8]">
        Create your Character
      </h1>
      <Form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={
            <span className="text-[#3E3ED8] font-medium">Character Name</span>
          }
          classNames={{
            inputWrapper: "border-[#B2B2EF] border-2 rounded-md text-[#3E3ED8]",
          }}
          labelPlacement="outside"
          variant="bordered"
          placeholder="Write the name of your hero"
          {...register("name", { required: "Name is required" })}
          errorMessage={errors.name?.message as string | undefined}
          isInvalid={!!errors.name}
        />
      </Form>
      <div className="flex flex-col gap-4 mt-8">
        <h3 className="font-semibold text-[16px] text-[#3E3ED8]">
          Choose how to bring your avatar to life
        </h3>
        <Button
          className="flex justify-start items-center font-semibold text-base h-11 text-[#3E3ED8] border-white border bg-[#3E3ED8]/10"
          style={{
            boxShadow: `0px 1px 2px 0px #7828C866`,
          }}
        >
          <Image
            src="/write.svg"
            alt="write icon"
            width={50}
            height={50}
            className="h-5 w-5"
            priority
          />{" "}
          Upload a picture
        </Button>
        <Button
          className="flex justify-start items-center font-semibold text-base  h-11 text-[#3E3ED8] bg-[#3E3ED8]/10 border-white border"
          style={{
            boxShadow: `0px 1px 2px 0px #7828C866`,
          }}
        >
          <Image
            src="/startContent.svg"
            alt="write icon"
            width={50}
            height={50}
            className="h-5 w-5"
            priority
          />{" "}
          Describe with words
        </Button>
      </div>
    </section>
  );
};
