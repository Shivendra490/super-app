import styles from "./Genre.module.css";
import wartImg from "../../assets/warn.png";
// import image from "../../assets/image.png";
import genres from "../../../data/genres";
import { useEffect, useState } from "react";



const Genre = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [lengthWarning,setLengthWarning]=useState(false)
  const selectGenreHandler = (index) => {
    if (selectedGenres.includes(index)) {
      return;
    }
    setSelectedGenres([...selectedGenres, index]);
  };

  const nextPageHandler=(e)=>{
    e.preventDefault()
    if(selectedGenres.length<3){
      setLengthWarning(true)
    }else{
      setLengthWarning(false)
    }
  }

  const deleteGenreHandler = (index) => {
    const updatedSelectedGenres = selectedGenres?.filter(
      (curElem) => curElem !== index
    );
    setSelectedGenres(updatedSelectedGenres);
  };

  useEffect(()=>{
    if(selectedGenres.length>=3){
      setLengthWarning(false)
    }
    localStorage.setItem("SELECTED_GENRES",JSON.stringify(selectedGenres))
    
  },[selectedGenres])

  return (
    <div className={styles.container}>
      <section className={styles.left}>
        <div className={styles.categoriesWrapper}>
          <h1 className={styles.mainHeading}>Super app</h1>
          <h2 className={styles.subHeading}>
            Choose your <br />
            entertainment
            <br />
            category
          </h2>
          <div className={styles.selectedCategories}>
            {selectedGenres?.map((curIndex) => {
              return (
                <div className={styles.category} key={curIndex}>
                  {genres[curIndex].title}{" "}
                  <span onClick={() => deleteGenreHandler(curIndex)}>X</span>
                </div>
              );
            })}
          </div>
          {lengthWarning && (
            <div className={styles.warning}>
              <img src={wartImg} /> Minimum 3 category required
            </div>
          )}
        </div>
      </section>
      <section className={styles.right}>
        <div className={styles.rightGenresGrid}>
          {genres?.map((genre, index) => {
            return (
              <div
                className={styles.genreItem}
                style={{
                  backgroundColor: genre.bgColor,
                  border: selectedGenres.includes(index)
                    ? "5px solid #11B800"
                    : "none",
                }}
                key={genre.id}
                onClick={() => selectGenreHandler(index)}
              >
                <p className={styles.genreTitle}>{genre.title}</p>
                <div className={styles.genreImage}>
                  <img src={genre.image} />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.nextButtonWrapper}>
          <button onClick={nextPageHandler}>Next Page</button>
        </div>
      </section>
    </div>
  );
};

export default Genre;
