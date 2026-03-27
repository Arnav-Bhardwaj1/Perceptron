"use client";

import {
  BotIcon,
} from "lucide-react";
import { Skeleton } from "@workspace/ui/components/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { useVapiAssistants } from "../../hooks/use-vapi-data";

export const VapiAssistantsTab = () => {
  const { data: assistants, isLoading } = useVapiAssistants();

  return (
    <div className="border-t bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="px-6 py-4">
              Assistant
            </TableHead>
            <TableHead className="px-6 py-4">
              Model
            </TableHead>
            <TableHead className="px-6 py-4">
              First Message
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(() => {
            if (isLoading) {
              return Array.from({ length: 3 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Skeleton className="size-4 rounded" />
                      <Skeleton className="h-4 w-28" />
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Skeleton className="h-4 w-24" />
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Skeleton className="h-4 w-40" />
                  </TableCell>
                </TableRow>
              ));
            }

            if (assistants.length === 0) {
              return (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="px-6 py-8 text-center text-muted-foreground"
                  >
                    No assistants configured
                  </TableCell>
                </TableRow>
              )
            }

            return assistants.map((assistant) => (
              <TableRow className="hover:bg-muted/50" key={assistant.id}>
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <BotIcon className="size-4 text-muted-foreground" />
                    <span>
                      {assistant.name || "Unnamed Assistant"}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <span className="text-sm">
                    {assistant.model?.model || "Not configured"}
                  </span>
                </TableCell>
                <TableCell className="max-w-xs px-6 py-4">
                  <p className="truncate text-muted-foreground text-sm">
                    {assistant.firstMessage || "No greeting configured"}
                  </p>
                </TableCell>
              </TableRow>
            ))
          })()}
        </TableBody>
      </Table>
    </div>
  );
};