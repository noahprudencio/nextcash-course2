"use client"

import {addDays} from "date-fns";
import { z } from "zod";

const TransactionFormSchema = z.object({
    transactionType: z.enum(["income", "expense"]),
    categoryId: z.coerce.number().positive("Please select a category"),
    transactionDate: z.coerce
        .date()
        .max(addDays(new Date(), 1), "Transaction date cannot be in the future"),
    amount: z.coerce.number().positive("Amount must be greater than zero"),
    description: z
        .string()
        .min(3, "Description must be at least 3 characters long")
        .max(300, "Description must be at most 300 characters long"),
});

export default function TransactionForm() {
  const form = useForm<z.infer<typeof TransactionFormSchema>>({
    resolver: zodResolver(TransactionFormSchema),
    defaultValues: {
        amount: 0,
        categoryId: 0,
        description: "",
        transactionDate: new Date(),
        transactionType: "income",
    },
  });

  return 
    <div>
      <h2>Transaction Form</h2>
    </div>
}   