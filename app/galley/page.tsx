import ImageGallery from "@/components/image-gallery";

const images = [
  {
    src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
    alt: "Image 1",
    caption: "A beautiful mountain landscape.",
  },
  {
    src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
    alt: "Image 2",
    caption: "A serene beach scene at sunset.",
  },
  {
    src: "https://cdn.pixabay.com/photo/2024/03/05/22/04/bird-8615360_640.jpg",
    alt: "Image 3",
    caption: "A colorful bird in flight.",
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg",
    alt: "Image 4",
    caption: "An enchanting fantasy landscape.",
  },
  {
    src: "https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_1280.jpg",
    alt: "Image 5",
    caption: "A peaceful fishing scene.",
  },
  {
    src: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
    alt: "Image 6",
    caption: "A scenic view with flowers in the mountains.",
  },
];

export default function Component() {
  return (
    <ImageGallery images={images} />
  );
}
