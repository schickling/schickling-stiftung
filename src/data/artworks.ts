import { escapeAndParamCase } from '../utils/utils'

export type Artwork = {
  title: string
  text: string
  imageUrl: string
  format: 'Vertikal' | 'Horizontal'
  technique: string
  date: string
  size: string
  category: 'Bilder' | 'Öffentliche Werke' | 'Architektur'
}

export const artworks: Artwork[] = [
  {
    category: 'Bilder',
    title: 'Moses',
    text: `Some text

  Even more text`,
    imageUrl:
      'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd16704b8-12b6-4d4e-8e9d-9d336e619167%2Fkapellenfenster.png?table=block&id=f236df8f-9187-41d8-879f-bc315893491d&width=600&userId=9374aa42-e837-486d-95ad-54573072f4c0&cache=v2',
    format: 'Vertikal',
    date: 'now',
    technique: 'some',
    size: 'some',
  },
  {
    category: 'Bilder',
    title: 'Grüne Günzlandschaft',
    text: `Hinterglasbild

    Noch mehr text.
    
    Hallo`,
    imageUrl:
      'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd930dc43-6e28-4702-9194-d383e58d129c%2Fguenz.jpg?table=block&id=87019bbe-45cf-4a46-b098-d7d6fdac8276&width=600&userId=9374aa42-e837-486d-95ad-54573072f4c0&cache=v2',
    format: 'Horizontal',
    date: 'now',
    technique: 'some',
    size: 'some',
  },
  {
    category: 'Bilder',
    title: 'Engel',
    text: `Hinterglasbild

    Noch mehr text.
    
    Hallo`,
    imageUrl:
      'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1021a113-df87-4565-bfd1-e73410965464%2Fengel.jpg?table=block&id=c119a5d3-dc2b-421a-96f6-2da42727f6fd&width=600&userId=9374aa42-e837-486d-95ad-54573072f4c0&cache=v2',
    format: 'Horizontal',
    date: 'now',
    technique: 'some',
    size: 'some',
  },
  {
    category: 'Öffentliche Werke',
    title: 'Engel 2',
    text: `Hinterglasbild

    Noch mehr text.
    
    Hallo`,
    imageUrl:
      'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1021a113-df87-4565-bfd1-e73410965464%2Fengel.jpg?table=block&id=c119a5d3-dc2b-421a-96f6-2da42727f6fd&width=600&userId=9374aa42-e837-486d-95ad-54573072f4c0&cache=v2',
    format: 'Horizontal',
    date: 'now',
    technique: 'some',
    size: 'some',
  },
]

export const categories = Array.from(
  new Set(artworks.map((_) => _.category)),
).map((_) => ({
  slug: escapeAndParamCase(_),
  title: _,
}))
