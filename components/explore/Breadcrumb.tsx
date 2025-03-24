import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

const BreadcrumbExplore = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-primary font-bold text-base">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-placeholder"/>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-primary font-bold text-base">
            Explore
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbExplore;
