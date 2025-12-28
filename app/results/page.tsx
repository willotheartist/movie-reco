type Props = {
  searchParams?: {
    mode?: string;
    q?: string;
    genre?: string;
  };
};

const placeholderMovies = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Placeholder Movie ${i + 1}`,
  year: 2000 + i,
}));

export default function ResultsPage({ searchParams }: Props) {
  const mode = searchParams?.mode;
  const q = (searchParams?.q || "").trim();
  const genre = (searchParams?.genre || "").trim();

  const heading =
    mode === "genre" && genre
      ? `Mood: ${genre}`
      : mode === "movie" && q
        ? `Starting from: ${q}`
        : "Results";

  return (
    <main style={{ padding: "2rem", maxWidth: 980, margin: "0 auto" }}>
      <a href="/" style={{ textDecoration: "none", opacity: 0.75 }}>
        ← Back
      </a>

      <h1 style={{ fontSize: 24, marginTop: 16 }}>{heading}</h1>
      <p style={{ marginTop: 6, opacity: 0.75, maxWidth: 720 }}>
        These are placeholder results. The goal here is the flow and the trust framing, not
        the engine yet.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          marginTop: 24,
        }}
      >
        {placeholderMovies.map((m) => (
          <article
            key={m.id}
            style={{
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: 14,
              padding: 14,
            }}
          >
            <div
              style={{
                aspectRatio: "2 / 3",
                borderRadius: 10,
                border: "1px dashed rgba(255,255,255,0.18)",
                marginBottom: 12,
              }}
            />
            <h2 style={{ fontSize: 16, margin: 0 }}>
              {m.title} <span style={{ opacity: 0.7 }}>({m.year})</span>
            </h2>
          </article>
        ))}
      </div>
    </main>
  );
}
