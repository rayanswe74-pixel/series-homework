//חלק A: גישה לנתונים
export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => 
     show.seasons[seasonIndex].episodes[episodeIndex].title;



export const getLastSeasonNumber=(show) => 
     //show=series[0]
     show.seasons.length=== 0 ? 0 : show.seasons[show.seasons.length-1].number;



export const getNextSeasonYear= (show) => 
   show.nextSeason === undefined ? "No announcement" 
    : show.nextSeason.year;


//חלק B: פונקציות של מערכים
export const getById = (series, id) =>
    series.find(show => show.id === id);

 export const getSeasonsCount = (series) => 
     series.map(show => ({
        title: show.title,
        seasons: show.seasons.length
    }));


  export const hasTopEpisode = (show, minRating) => 
    show.seasons.some(x => x.episodes.length >= 1 &&
        x.episodes.some(x =>x.rating >= minRating)
    );
    
    
    //Creators יוצרים
    export const getCreatorsFrom= (series, country)=>
        series.filter(x =>  x.creator.country== country).map(x=>  x.creator.name);


    
    //מחזירה מערך חדש, ממוין לפי שנת ההתחלה — מהישנה לחדשה. המערך המקורי נשאר בסדר שלו.
   export const sortByStartYear = (series) =>
    series.toSorted((a, b) => a.startYear - b.startYear);