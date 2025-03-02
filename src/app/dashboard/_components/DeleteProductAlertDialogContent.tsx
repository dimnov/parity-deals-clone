"use client";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteProduct } from "@/server/actions/products";
import { useTransition } from "react";
import { toast } from "sonner";

function DeleteProductAlertDialogContent({ id }: { id: string }) {
  const [isDeletePending, startDeleteTransition] = useTransition();

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>This will permanently delete this product.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction
          onClick={() => {
            startDeleteTransition(async () => {
              const data = await deleteProduct(id);

              if (data.message) {
                if (data.error) {
                  toast.error(data.message);
                } else {
                  toast.success(data.message);
                }
              }
            });
          }}
          disabled={isDeletePending}
        >
          Delete
        </AlertDialogAction>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}

export default DeleteProductAlertDialogContent;
