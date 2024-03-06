import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

const fetchFontData = fetch(
  new URL("../../../public/fonts/Spectral-Light.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET() {
  const spectralFont = await fetchFontData;
  return new ImageResponse(
    (
      <div
        style={{
          background: "#10172a",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        <h1 style={{ color: "#37bcf8", fontSize: 80 }}>Bhone Aung Kyaw</h1>
        <h2
          style={{ color: "#da2877", fontSize: 65, fontFamily: '"Spectral"' }}
        >
          Full-stack Developer
        </h2>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Spectral",
          data: spectralFont,
          style: "normal",
        },
      ],
    }
  );
}
