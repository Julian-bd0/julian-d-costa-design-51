const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="section-container text-center">
        <p className="text-sm text-background/70">
          © {new Date().getFullYear()} Julian D Costa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
