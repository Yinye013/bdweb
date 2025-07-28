export interface GridImage {
  id: number;
  imgPath: string;
  alt?: string;
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const allImages: GridImage[] = [
  { id: 1, imgPath: "/img/emeka1.jpeg", alt: "Emeka Photo 1" },
  { id: 2, imgPath: "/img/emeka2.jpeg", alt: "Emeka Photo 2" },
  { id: 3, imgPath: "/img/emeka3.jpeg", alt: "Emeka Photo 3" },
  { id: 4, imgPath: "/img/emeka4.jpeg", alt: "Emeka Photo 4" },
  { id: 5, imgPath: "/img/emeka5.jpeg", alt: "Emeka Photo 5" },
  { id: 6, imgPath: "/img/emeka6.jpeg", alt: "Emeka Photo 6" },
  { id: 7, imgPath: "/img/emeka7.jpeg", alt: "Emeka Photo 7" },
  { id: 8, imgPath: "/img/emeka8.jpeg", alt: "Emeka Photo 8" },
  { id: 9, imgPath: "/img/emeka9.jpeg", alt: "Emeka Photo 9" },
  { id: 10, imgPath: "/img/emeka10.jpeg", alt: "Emeka Photo 10" },
  { id: 11, imgPath: "/img/emeka11.jpeg", alt: "Emeka Photo 11" },
  { id: 12, imgPath: "/img/emeka12.jpeg", alt: "Emeka Photo 12" },
  { id: 13, imgPath: "/img/emeka13.jpeg", alt: "Emeka Photo 13" },
  { id: 14, imgPath: "/img/emeka14.jpeg", alt: "Emeka Photo 14" },
  { id: 15, imgPath: "/img/emeka15.jpeg", alt: "Emeka Photo 15" },
  { id: 16, imgPath: "/img/emeka16.jpeg", alt: "Emeka Photo 16" },
  { id: 17, imgPath: "/img/emeka17.jpeg", alt: "Emeka Photo 17" },
  { id: 18, imgPath: "/img/emeka18.jpeg", alt: "Emeka Photo 18" },
  { id: 19, imgPath: "/img/emeka19.jpeg", alt: "Emeka Photo 19" },
  { id: 20, imgPath: "/img/emeka20.jpeg", alt: "Emeka Photo 20" },
];

// Shuffle the array and take the first 9 images
const shuffledImages = shuffleArray(allImages);
export const hitusupArr: GridImage[] = shuffledImages.slice(0, 9);

export default hitusupArr;
