import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('fundraiser').title('Fundraisers'),
      S.documentTypeListItem('news').title('News'),
      ...S.documentTypeListItems().filter((item) => !['news', 'fundraiser'].includes(item.getId() || '')),
    ])
