import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function NewTransactionPage() {
    return (<div className="py-10 px-6">
      <Breadcrumb>
        <BreadcrumbList>
           <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">
                Dashboard
              </BreadcrumbLink>
           </BreadcrumbItem>
           <BreadcrumbSeparator />
           <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/transactions">
                Transactions
              </BreadcrumbLink>
           </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>New Transaction</BreadcrumbPage>
              </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>);
}