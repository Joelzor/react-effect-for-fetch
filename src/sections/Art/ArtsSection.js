import { useEffect, useState } from "react";

function ArtsSection() {
  const [artList, setArtList] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((res) => res.json())
      .then((art) => setArtList(art.data));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artList.map((artItem) => {
            const { title, artist_title, subject_titles, image_id } = artItem;
            const image = `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;
            return (
              <li>
                <div class="frame">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <p>Artist: {artist_title}</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                  {subject_titles.map((subject) => {
                    return <li>{subject}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
