export default function Home() {
  return (
    <main style={{ padding: "2rem", maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, lineHeight: 1.2, marginBottom: 8 }}>
        Find a movie you’ll probably enjoy
      </h1>
      <p style={{ marginTop: 0, opacity: 0.75 }}>
        Start from something you already like, or pick a genre.
      </p>

      <section style={{ marginTop: 32 }}>
        <form action="/results" method="GET">
          <input type="hidden" name="mode" value="movie" />
          <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
            Start from a movie you like
          </label>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              name="q"
              type="text"
              placeholder="e.g. Inception"
              style={{ flex: 1, padding: "10px 12px" }}
            />
            <button type="submit" style={{ padding: "10px 12px" }}>
              Continue
            </button>
          </div>
        </form>
      </section>

      <section style={{ marginTop: 32 }}>
        <p style={{ marginBottom: 8, fontWeight: 600 }}>Or pick a genre</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Drama", "Thriller", "Comedy", "Sci-Fi", "Romance"].map((genre) => (
            <a
              key={genre}
              href={`/results?mode=genre&genre=${encodeURIComponent(genre)}`}
              style={{
                padding: "8px 10px",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 10,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              {genre}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
