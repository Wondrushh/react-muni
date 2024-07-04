import "./breadcrumb-item.css";

interface BreadcrumbItemProps {
  link: string;
  name: string;
}

export const BreadcrumbItem = ({ ...props }: BreadcrumbItemProps) => {
  return (
    <>
      <a className="breadcrumb-item" href={props.link}>{props.name}</a>
    </>
  );
};
