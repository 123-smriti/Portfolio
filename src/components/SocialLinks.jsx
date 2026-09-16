function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M6.94 8.5H3.75V20h3.19V8.5ZM5.34 3.5A1.84 1.84 0 1 0 5.35 7.18 1.84 1.84 0 0 0 5.34 3.5ZM20.25 20h-3.18v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.87V8.5h3.05v1.57h.04c.42-.8 1.46-1.64 3.01-1.64 3.22 0 3.28 2.12 3.28 4.87V20Z"
      />
    </svg>
  );
}

function SocialLinks({ github, linkedin, className = "" }) {
  return (
    <div className={`social-links ${className}`.trim()}>
      <a
        className="social-links__item"
        href={github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
      >
        <GitHubIcon />
        <span>GitHub</span>
      </a>
      <a
        className="social-links__item"
        href={linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
      >
        <LinkedInIcon />
        <span>LinkedIn</span>
      </a>
    </div>
  );
}

export default SocialLinks;
