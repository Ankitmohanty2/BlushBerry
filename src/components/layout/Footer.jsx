import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">

      <Container>

        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-4">

          <h2 className="logo-text text-2xl">
            BlushBerry
          </h2>

          <p className="text-sm text-muted-foreground">
            Made with ❤️ By Ankit Mohanty.
          </p>

        </div>

      </Container>

    </footer>
  );
}