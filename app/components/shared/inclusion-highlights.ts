export type InclusionHighlight = {
  key: "stay" | "meals" | "travel" | "guide"
  label: string
}

const CORE_HIGHLIGHTS: InclusionHighlight[] = [
  { key: "stay", label: "Stay" },
  { key: "meals", label: "Meals" },
  { key: "travel", label: "Travel" },
  { key: "guide", label: "Guide" },
]

const matchesHighlight = (value: string, key: InclusionHighlight["key"]) => {
  const normalized = value.toLowerCase()

  if (key === "stay") return /stay|camp|accommodation|hotel|tent|night/.test(normalized)
  if (key === "meals") return /meal|breakfast|lunch|dinner|food/.test(normalized)
  if (key === "travel") return /travel|transport|pickup|drop|transfer|vehicle|drive/.test(normalized)
  return /guide|pilot|instructor|crew|support|coordination|host/.test(normalized)
}

export const getCoreInclusionHighlights = (inclusions: string[]) =>
  CORE_HIGHLIGHTS.filter((highlight) =>
    inclusions.some((item) => matchesHighlight(item, highlight.key))
  )

export const ensureCoreInclusions = (inclusions: string[]) => {
  const next = [...inclusions]

  const fallbackEntries: Record<InclusionHighlight["key"], string> = {
    stay: "Stay as per package itinerary",
    meals: "Meals as per package plan",
    travel: "Travel support as per itinerary",
    guide: "Guide assistance during the trip",
  }

  CORE_HIGHLIGHTS.forEach((highlight) => {
    if (!inclusions.some((item) => matchesHighlight(item, highlight.key))) {
      next.push(fallbackEntries[highlight.key])
    }
  })

  return next
}
