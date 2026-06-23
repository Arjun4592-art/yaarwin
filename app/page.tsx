import { homeMetadata } from '@/lib/seo/metadata'
import HomeClient from '@/components/scripts/HomeScripts'

export const metadata = homeMetadata

export default function HomePage() {
  return <HomeClient />
}
