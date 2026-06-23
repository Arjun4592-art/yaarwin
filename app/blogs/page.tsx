import { blogsMetadata } from '@/lib/seo/metadata'
import BlogScripts from '@/components/scripts/BlogScripts'
export const metadata = blogsMetadata

export default function BlogPage() {
  return <BlogScripts />
}
