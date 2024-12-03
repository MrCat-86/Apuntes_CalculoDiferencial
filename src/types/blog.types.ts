export interface IBlogPost {
  [x: string]: unknown
  title: string
  tags: string
  description: string
  pubDate: Date
  heroImage?: string
  updatedDate?: Date
}

export interface IBlogPostCollection {
  id: string
  slug: string
  body: string
  collection: string
  data: IBlogPost
  render: () => void
}
