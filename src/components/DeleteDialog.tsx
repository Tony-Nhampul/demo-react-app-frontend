import { useProducts } from "@/hooks/pages/useProducts";
import { Trash2 } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface DeleteDialogProps {
  id: number;
}

export default function DeleteDialog({ id }: DeleteDialogProps) {
  const { handleDelete, prodDialogOpen, setProdDialogOpen } = useProducts();
  return (
    <Dialog open={prodDialogOpen} onOpenChange={setProdDialogOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="px-3">
          <Trash2 className="w-4 h-4 text-red-700" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminando Produto</DialogTitle>
          <DialogDescription>
            Tem certeza que deseja eliminar este Produto?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="gap-1">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancelar
            </Button>
          </DialogClose>
          <Button onClick={() => handleDelete(id)}>
            <Trash2 className="w-4 h-4" />
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
