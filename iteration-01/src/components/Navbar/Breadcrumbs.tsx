import "./breadcrumbs.css";
import { BreadcrumbItem } from "./BreadcrumbItem";

interface BreadcrumbsProps {
    className? : string,
}

export const Breadcrumbs = ({...props}: BreadcrumbsProps) => {
  const breadcrumbData: Array<string> = [
    "home",
    "categories",
    "cleaning",
    "shampoo",
  ]; // dummy data

  return (
    <div className={`breadcrumbs ${props.className}`}>
      {breadcrumbData.map((item, i) => (
        <>
          <BreadcrumbItem
            name={item[0].toUpperCase() + item.slice(1)}
            link={generateBreadcrumbLink(breadcrumbData, i)}
          /> 
              {i < breadcrumbData.length-1 && "/"}
        </>
      ))}
    </div>
  );
};

const generateBreadcrumbLink = (breadcrumbs: Array<string>, index: number) => {
  const breadcrumbLink: string = breadcrumbs.reduce((prev, curr, currIndex) =>
    currIndex <= index ? prev.concat("/", curr) : prev
  );
  return breadcrumbLink;
};
