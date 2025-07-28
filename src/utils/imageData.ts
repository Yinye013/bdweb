export type CarouselImage = {
  src: string; // Image path/URL
  alt: string; // Accessibility text description
  caption?: string; // Optional caption text
  downloadSrc?: string; // Optional different URL for downloading
};

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Array of images for Emeka's birthday gallery
 */
const imagesList: CarouselImage[] = [
  {
    src: "/img/emeka1.jpeg",
    alt: "Emeka - Celebration Moment",
    caption: "Creating memories that last a lifetime",
  },
  {
    src: "/img/emeka2.jpeg",
    alt: "Emeka - Special Occasion",
    caption: "Every moment with you is a blessing",
  },
  {
    src: "/img/emeka3.jpeg",
    alt: "Emeka - Happy Moments",
    caption: "Your smile lights up every room",
  },
  {
    src: "/img/emeka4.jpeg",
    alt: "Emeka - Good Times",
    caption: "Here's to many more years of joy and success",
  },
  {
    src: "/img/emeka5.jpeg",
    alt: "Emeka - Cherished Memory",
    caption: "Looking back at wonderful memories",
  },
  {
    src: "/img/emeka6.jpeg",
    alt: "Emeka - Special Day",
    caption: "Celebrating the amazing person you are",
  },
  {
    src: "/img/emeka7.jpeg",
    alt: "Emeka - Memorable Moment",
    caption: "Another year of amazing achievements",
  },
  {
    src: "/img/emeka8.jpeg",
    alt: "Emeka - Fun Times",
    caption: "Laughter is the best gift",
  },
  {
    src: "/img/emeka9.jpeg",
    alt: "Emeka - Precious Memory",
    caption: "Celebrating your special day",
  },
  {
    src: "/img/emeka10.jpeg",
    alt: "Emeka - Joyful Occasion",
    caption: "Here's to many more celebrations",
  },
  {
    src: "/img/emeka11.jpeg",
    alt: "Emeka - Special Gathering",
    caption: "Surrounded by love and joy",
  },
  {
    src: "/img/emeka12.jpeg",
    alt: "Emeka - Memorable Event",
    caption: "Cheers to new beginnings",
  },
  {
    src: "/img/emeka13.jpeg",
    alt: "Emeka - Happy Celebration",
    caption: "Making wishes come true",
  },
  {
    src: "/img/emeka14.jpeg",
    alt: "Emeka - Wonderful Time",
    caption: "Celebrating your uniqueness",
  },
  {
    src: "/img/emeka15.jpeg",
    alt: "Emeka - Special Celebration",
    caption: "Creating new memories together",
  },
  {
    src: "/img/emeka16.jpeg",
    alt: "Emeka - Good Friends",
    caption: "Friends that become family",
  },
  {
    src: "/img/emeka17.jpeg",
    alt: "Emeka - Happy Day",
    caption: "Moments to treasure forever",
  },
  {
    src: "/img/emeka18.jpeg",
    alt: "Emeka - Fun Celebration",
    caption: "Joy and laughter all around",
  },
  {
    src: "/img/emeka19.jpeg",
    alt: "Emeka - Special Time",
    caption: "Happy birthday and many more",
  },
  {
    src: "/img/emeka20.jpeg",
    alt: "Emeka - Celebration Time",
    caption: "Making your day special",
  },
];

// Shuffle the images for random order
export const birthdayImages = shuffleArray(imagesList);

export default birthdayImages;
