"use client";
import ImageUpload from "@/components/image-cloudinary-upload/image-upload";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Category = {
  category_id: string;
  name: string;
};

const categories: Category[] = [
  {
    category_id: "1",
    name: "A - Category 1",
  },
  {
    category_id: "2",
    name: "B - Category 2",
  },
  {
    category_id: "3",
    name: "C - Category 3",
  },
];

const CreateProduct = () => {
  const formSchema = z.object({
    productName: z.string().min(1, { message: "Hãy nhập tên sản phẩm" }),
    quantity: z.coerce.number().min(1, { message: "Hãy nhập giá tiền" }),
    description: z.string().min(1, { message: "Hãy nhập mô tả" }),
    category_id: z.string().min(1, { message: "Hãy chọn thể loại" }),
    images: z
      .object({ url: z.string() })
      .array()
      .min(1, { message: "Hãy nhập ít nhất 1 ảnh" }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      category_id: "",
      quantity: 0,
      images: [],
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // try {
    //   setLoading(true);
    //   if (initialData) {
    //     await axios.patch(`/api/products/${params.productId}`, data);
    //   } else {
    //     await axios.post(`/api/products`, data);
    //   }
    //   router.refresh();
    //   router.push(`/products`);
    //   toast.success(toastMessage);
    // } catch (error: any) {
    //   toast.error("Đã có lỗi.");
    // } finally {
    //   setLoading(false);
    // }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <main className="w-full h-full xl:px-[48px] px-6 pb-6 xl:pb-[48px] sm:pt-[156px] dark:bg-darkblack-700 pt-[100px]">
      <div className="gap-3 lg:gap-4 xl:gap-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hình ảnh</FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value.map((image) => image.url)}
                      disabled={isLoading}
                      onChange={(url) =>
                        field.onChange([...field.value, { url }])
                      }
                      onRemove={(url) =>
                        field.onChange([
                          ...field.value.filter(
                            (current) => current.url !== url
                          ),
                        ])
                      }
                    />
                  </FormControl>
                  <FormMessage className="dark:text-yellow-300" />
                </FormItem>
              )}
            />
            <div className="md:grid md:grid-cols-3 gap-8">
              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên sản phẩm</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="vd: Gấu bông"
                        {...field}
                        className="bg-zinc-200/50 dark:bg-zinc-700/50 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage className="dark:text-yellow-300" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Giá tiền</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        disabled={isLoading}
                        placeholder="0"
                        {...field}
                        className="bg-zinc-200/50 dark:bg-zinc-700/50 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                      />
                    </FormControl>
                    <FormMessage className="dark:text-yellow-300" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mã phân loại</FormLabel>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            defaultValue={field.value}
                            placeholder="Lựa một mã phân loại"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem
                            key={category.category_id}
                            value={category.category_id}
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="dark:text-yellow-300" />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mô tả</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={isLoading}
                      placeholder="vd: Mô tả sản phẩm"
                      {...field}
                      autoComplete="off"
                      className="bg-zinc-200/50 dark:bg-zinc-700/50 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage className="dark:text-yellow-300" />
                </FormItem>
              )}
            />
            <Button
              disabled={isLoading}
              variant="action"
              className="ml-auto"
              type="submit"
            >
              Create
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default CreateProduct;
