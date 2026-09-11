/** Re-mounts on every route change, which is what gives each page its fade-up. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="vx-page">{children}</div>;
}
