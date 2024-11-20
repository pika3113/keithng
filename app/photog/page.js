import Image from "next/image";
import Link from 'next/link'
import fs from 'fs';
import path from 'path';



export default async function photog() {
  const photosDirectory = path.join(process.cwd(), 'public/photos');
  const fileNames = fs.readdirSync(photosDirectory);
  const photos = fileNames.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));

  return (
    <div className=''>
      <div className='topphoto'>
      <img src={`/photos/LCH03598.jpg`} alt={`LCH03598.jpg`} />
      </div>
      <div className="masonry-container">
        {photos.map((photo, index) => (
          <div key={index} className="masonry-item">
            <img src={`/photos/${photo}`} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>

    </div>
  )
}
//<Link href="/skills">My skills</Link>