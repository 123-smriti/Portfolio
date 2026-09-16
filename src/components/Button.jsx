/**
 * Shared button/link styles. Use `href` for links and `type` for form buttons.
 */
function Button({
  children,
  href,
  variant = "primary",
  download,
  type = "button",
  onClick,
  ariaLabel,
  className = "",
}) {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        className={classes}
        href={href}
        download={download || undefined}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
