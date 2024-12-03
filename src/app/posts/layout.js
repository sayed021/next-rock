
export const metadata = {
  title: "Blog page",
  description: "Blog page meta description",
};

export default function BlogLayout({ children }) {
  return <div className="container mx-auto">{children}</div>;
}
