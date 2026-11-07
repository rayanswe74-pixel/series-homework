
import { writeFileSync } from "node:fs";
import { loadData } from "./load.js";
import { addSeason } from "./series-service.js";

// 1. טוענים את הנתונים
const data = loadData();

// 2. יוצרים את העונה החדשה (הדוגמה של C2)
const season = {
    number: 1,
    episodes: [
        { id: 801, title: "First Contact", rating: 8.0, duration: 44 }
    ]
};

// 3. מוסיפים את העונה ל-Desert Signal
const updatedSeries = addSeason(data.series, 5, season);

// 4. יוצרים אובייקט עם אותו platform ומערך הסדרות החדש
const updatedData = {
    platform: data.platform,
    series: updatedSeries
};

// 5. שומרים לקובץ חדש
writeFileSync(
    "series-updated.json",
    JSON.stringify(updatedData, null, 2),
    "utf-8"
);
