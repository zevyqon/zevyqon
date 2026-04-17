import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <Container>
        <Card>
          <h1 className="text-3xl font-bold mb-4">
            Zevyqon Design System Ready
          </h1>

          <p className="text-gray-400 mb-6">
            Your premium UI foundation is now active.
          </p>

          <Button>Test Interaction</Button>
        </Card>
      </Container>
    </main>
  );
}
