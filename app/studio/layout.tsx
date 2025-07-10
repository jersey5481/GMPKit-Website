export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ height: '100vh' }}>
      {children}
    </div>
  )
}

// Ensure the Studio route is not statically generated
export const dynamic = 'force-dynamic'
