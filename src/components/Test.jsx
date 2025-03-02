import { getEntries } from "../lib/contentful";


export default async function Home() {
  const posts = await getEntries("skills"); // Fetch data from Contentful
  const lastUpdated = new Date().toLocaleTimeString(); // Get the current time

  return (
    <div>
      <h1>Contentful + ISR (App Router)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <h2>{post.fields.skillName}</h2>
            <p>{post.fields.level}</p>
          </li>
        ))}
      </ul>
      <p><strong>Last Updated:</strong> {lastUpdated}</p>
    </div>
  );
}
