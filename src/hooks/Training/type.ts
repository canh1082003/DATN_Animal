export interface Training {
  id: string
  title: string
  description: string
  image: string
  difficulty: 'Cơ bản' | 'Hành vi' | 'Nâng cao' | 'Chó con'
  duration: string // e.g., "10 phút"
  steps: Step[]
}
export const categories = [
  { id: 'all', name: 'Tất cả' },
  { id: 'basic', name: 'Cơ bản' },
  { id: 'behavior', name: 'Hành vi' },
  { id: 'advanced', name: 'Nâng cao' },
  { id: 'puppy', name: 'Chó con' }
]
