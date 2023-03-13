import PhotoAlbum from "react-photo-album";

const photos = [
    { src: "https://images.unsplash.com/photo-1624385690664-38a3af477cd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", width: 1740, height: 800 },
    { src: "https://images.unsplash.com/photo-1654018869756-d08407972836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2918&q=80", width: 2918, height: 1200 },
    { src: "https://darmau.design/_next/image?url=https%3A%2F%2Fdarmau-design.hks3.layerstackobjects.com%2FDSC_00345_91e5d380e5.jpeg&w=3840&q=75", width: 2918, height: 1200 }
];

export default function Gallery() {
    return <PhotoAlbum layout="rows" photos={photos} />;
}
