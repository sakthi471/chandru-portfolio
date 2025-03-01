export async function GET() {
    console.log("From server")
    return Response.json({ message: "Hello, this is a test API in Next.js (App Router)!" });
  }
  