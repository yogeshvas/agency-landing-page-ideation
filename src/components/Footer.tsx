export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-20 bg-background border-t border-border/30 font-sans">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-muted-foreground text-sm font-medium">
          © 2026 damndesign.com. All rights reserved.
        </p>

        <div className="flex items-center gap-8 text-sm font-medium">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
