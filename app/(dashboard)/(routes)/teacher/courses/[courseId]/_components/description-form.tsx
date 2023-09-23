"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DescriptionFormProps {
  initialData: Course;
  courseId: string;
}

const formSchema = z.object({
  description: z.string().min(1, {
    message: "Description is required",
  }),
});

export const DescriptionForm = ({
  initialData,
  courseId,
}: DescriptionFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((current) => !current);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: initialData?.description || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success("Course title has updated");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course description
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel </>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
            </>
          )}
          Edit
        </Button>
      </div>
      {!isEditing && (
        <p
          className={cn(
            "text-sm mt-2",
            !initialData.description && "text-slate-500 italic"
          )}
        >
          {initialData.description || "No description"}
        </p>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      disabled={isSubmitting}
                      placeholder="e.g 'This course is about. Lorem ipsum dolor sit amet, consectetur.'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button
                disabled={!isValid || isSubmitting}
                type="submit"
                variant="endo"
              >
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
