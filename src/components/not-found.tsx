import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold">This hide is not in the lot.</h1>
      <p className="mt-4 text-muted">
        The page does not exist. Return home or browse the article list.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/products">Products</Link>
        </Button>
      </div>
    </main>
  );
}
