import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";
import { Container } from "@/components/ui/Container";

export function NewsletterSignupSection() {
  return (
    <section className="border-t border-border/60 bg-surface" aria-labelledby="newsletter-signup">
      <Container className="py-12 sm:py-16">
        <NewsletterSignup variant="section" />
      </Container>
    </section>
  );
}
