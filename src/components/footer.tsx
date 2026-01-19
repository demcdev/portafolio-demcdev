export function Footer() {

  return (
    <footer id="contact" className="py-4 md:py-8 bg-muted/30 border-t border-border reveal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom Bar */}
        <div className="pt-4 border-t border-border flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Diego Mora.</p>
        </div>
      </div>
    </footer>
  )
}
