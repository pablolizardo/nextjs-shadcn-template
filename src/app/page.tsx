import { Button } from "@/components/ui/button";
import { TypographyH1, TypographySmall } from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TypographyH1>Nextjs + Shadcn</TypographyH1>
      <TypographySmall>Starter Kit</TypographySmall>
      <Button>This is a button</Button>
    </main>
  );
}
