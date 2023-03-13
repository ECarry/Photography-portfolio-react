import PhotoAlbum from "react-photo-album";

const photos = [
    { src: "https://darmau.design/_next/image?url=https%3A%2F%2Fdarmau-design.hks3.layerstackobjects.com%2FDSC_01815_43579f31d4.jpeg&w=3840&q=75", width: 800, height: 600 },
    { src: "https://darmau.design/_next/image?url=https%3A%2F%2Fdarmau-design.hks3.layerstackobjects.com%2FDSC_01815_43579f31d4.jpeg&w=3840&q=75", width: 1600, height: 900 },
    { src: "https://darmau.design/_next/image?url=https%3A%2F%2Fdarmau-design.hks3.layerstackobjects.com%2FDSC_01815_43579f31d4.jpeg&w=3840&q=75", width: 1600, height: 900 },
    { src: "https://darmau.design/_next/image?url=https%3A%2F%2Fdarmau-design.hks3.layerstackobjects.com%2FDSC_01815_43579f31d4.jpeg&w=3840&q=75", width: 1600, height: 900 },
    { src: "https://darmau.design/_next/image?url=https%3A%2F%2Fdarmau-design.hks3.layerstackobjects.com%2FDSC_01815_43579f31d4.jpeg&w=3840&q=75", width: 1600, height: 900 },
    { src: "https://darmau.design/_next/image?url=https%3A%2F%2Fdarmau-design.hks3.layerstackobjects.com%2FDSC_01815_43579f31d4.jpeg&w=3840&q=75", width: 1600, height: 900 },
    { src: "https://darmau.design/_next/image?url=https%3A%2F%2Fdarmau-design.hks3.layerstackobjects.com%2FDSC_01815_43579f31d4.jpeg&w=3840&q=75", width: 1600, height: 900 },
    { src: "https://darmau.design/_next/image?url=https%3A%2F%2Fdarmau-design.hks3.layerstackobjects.com%2FDSC_01815_43579f31d4.jpeg&w=3840&q=75", width: 1600, height: 900 },
    { src: "https://darmau.design/_next/image?url=https%3A%2F%2Fdarmau-design.hks3.layerstackobjects.com%2FDSC_01815_43579f31d4.jpeg&w=3840&q=75", width: 1600, height: 900 },
    { src: "https://darmau.design/_next/image?url=https%3A%2F%2Fdarmau-design.hks3.layerstackobjects.com%2FDSC_01815_43579f31d4.jpeg&w=3840&q=75", width: 1600, height: 900 },
    { src: "https://darmau.design/_next/image?url=https%3A%2F%2Fdarmau-design.hks3.layerstackobjects.com%2FDSC_01815_43579f31d4.jpeg&w=3840&q=75", width: 1600, height: 900 },
    { src: "https://darmau.design/_next/image?url=https%3A%2F%2Fdarmau-design.hks3.layerstackobjects.com%2FDSC_01815_43579f31d4.jpeg&w=3840&q=75", width: 1600, height: 900 },
    { src: "https://darmau.design/_next/image?url=https%3A%2F%2Fdarmau-design.hks3.layerstackobjects.com%2FDSC_01815_43579f31d4.jpeg&w=3840&q=75", width: 1600, height: 900 },
    { src: "https://darmau.design/_next/image?url=https%3A%2F%2Fdarmau-design.hks3.layerstackobjects.com%2FDSC_01815_43579f31d4.jpeg&w=3840&q=75", width: 1600, height: 900 },
];

export default function Gallery() {
    return <PhotoAlbum layout="columns" photos={photos} />;
}
