interface StatCardProps {
  number: string
  label: string
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{number}</div>
      <p className="text-gray-600">{label}</p>
    </div>
  )
}
