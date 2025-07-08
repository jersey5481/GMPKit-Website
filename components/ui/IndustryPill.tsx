interface IndustryPillProps {
  name: string
}

export default function IndustryPill({ name }: IndustryPillProps) {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <p className="font-semibold text-sm">{name}</p>
    </div>
  )
}
