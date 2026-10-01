import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/made-products")({
  component: () => <Outlet />,
});
