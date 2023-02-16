import { proxy, useSnapshot } from "valtio"
import { ICard } from "../interfaces/interfaces";

export const GalleryState = proxy({
  searchTerm: '',
  cards: [] as ICard[],
  setTerm: (term: string) => {
    GalleryState.searchTerm = term;
  },
  addCard: (
    title: string,
    subTitle: string,
    description: string
  ) => {
    //Los texto se agregaron para crear tarjetas más rápido.
    //Los inputs debería estar normalizados para más seguridad en la aplicación.
    const card = {
      id: GalleryState.cards.length,
      title: title || 'No title',
      subTitle: subTitle || 'No subtitle',
      description: description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    }
    GalleryState.cards.push(card);
  },
})

export const GetFilterGalleryHook = () => {
  const { searchTerm, cards } = useSnapshot(GalleryState);
  if (!searchTerm) {
    return cards;
  }
  //TODO: Se pudo resolver usando una expresión regular con comodín
  // para que la búsqueda se más flexible y admita caracteres con tilde.
  return cards.filter((x: ICard) =>
    x.title.includes(searchTerm) ||
    x.subTitle.includes(searchTerm) ||
    x.description.includes(searchTerm)
  )
};