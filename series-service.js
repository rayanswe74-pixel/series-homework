
// חלק A: גישה לנתונים

export const getEpisodeTitle = (show, seasonIndex, episodeIndex) =>
    show.seasons[seasonIndex].episodes[episodeIndex].title;


export const getLastSeasonNumber = (show) =>
    show.seasons.length === 0
        ? 0
        : show.seasons[show.seasons.length - 1].number;


export const getNextSeasonYear = (show) =>
    show.nextSeason === undefined
        ? "No announcement"
        : show.nextSeason.year;


// חלק B: פונקציות של מערכים

export const getById = (series, id) =>
    series.find(show => show.id === id);


export const getSeasonsCount = (series) =>
    series.map(show => ({
        title: show.title,
        seasons: show.seasons.length
    }));


export const hasTopEpisode = (show, minRating) =>
    show.seasons.some(season =>
        season.episodes.some(episode => episode.rating >= minRating)
    );


export const getCreatorsFrom = (series, country) =>
    series
        .filter(x => x.creator.country === country)
        .map(x => x.creator.name);


// מחזירה מערך חדש, ממוין לפי שנת ההתחלה — מהישנה לחדשה.
// המערך המקורי נשאר בסדר שלו.

export const sortByStartYear = (series) =>
    series.toSorted((a, b) => a.startYear - b.startYear);


// חלק C: עדכונים בלי לשנות את המקור

export const renameSeries = (series, id, newTitle) =>
    series.map(x =>
        x.id === id
            ? { ...x, title: newTitle }
            : x
    );


export const addSeason = (series, showId, season) =>
    series.map(x =>
        x.id === showId
            ? { ...x, seasons: [...x.seasons, season] }
            : x
    );


export const addEpisode = (series, showId, seasonNumber, episode) =>
    series.map(x =>
        x.id === showId
            ? {
                ...x,
                seasons: x.seasons.map(s =>
                    s.number === seasonNumber
                        ? { ...s, episodes: [...s.episodes, episode] }
                        : s
                )
            }
            : x
    );
