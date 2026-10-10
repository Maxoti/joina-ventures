/** Three overlapping process-ink discs. Used as the logo mark. */
export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <g style={{ mixBlendMode: "multiply" }}>
        <circle cx="12" cy="12" r="9" fill="#00A3D9" />
        <circle cx="20" cy="12" r="9" fill="#D81B78" />
        <circle cx="16" cy="20" r="9" fill="#FFC72C" />
      </g>
    </svg>
  );
}
