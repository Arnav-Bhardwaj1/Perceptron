'use client'

import WidgetView from "@/modules/widget/ui/views/widget-view";
import { use } from "react";

interface Props {
  searchParams: Promise<{ // we get the organizationId from the search params, and we use a promise to unwrap it
    organizationId: string;
  }>
};

const Page = ({ searchParams }: Props) => {
  const {organizationId} = use(searchParams); // use hook is used to unwrap the promise and get the organizationId
  return (
    <WidgetView organizationId={organizationId} />
  );
};

export default Page;