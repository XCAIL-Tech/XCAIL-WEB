const TECH_COLORS: Record<string, string> = {
  "Gemini API":      "#4285F4",
  "Firebase":        "#FF6F00",
  "Cloud Functions": "#4285F4",
  "Google Cloud":    "#34A853",
  "Cloud Run":       "#4285F4",
  "Cloud Storage":   "#4285F4",
  "Cloud TTS":                    "#34A853",
  "Cloud TTS · STT":              "#34A853",
  "Predicción adaptativa (ML)":   "#00BFFF",
  "Adaptive prediction (ML)":     "#00BFFF",
  "Cloud Build":     "#4285F4",
  "App Engine":      "#EA4335",
  "React":           "#61DAFB",
  "TypeScript":      "#3178C6",
  "Python":          "#3776AB",
  "Supabase":        "#3ECF8E",
};

export function TechBadge({ name }: { name: string }) {
  const color = TECH_COLORS[name] ?? "#94a3b8";
  return (
    <span
      className="text-xs font-medium px-2.5 py-1 rounded-md border transition-colors"
      style={{
        color,
        borderColor: `${color}50`,
        backgroundColor: `${color}12`,
      }}
    >
      {name}
    </span>
  );
}
