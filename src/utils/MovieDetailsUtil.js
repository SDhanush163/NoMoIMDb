const movieDetails = ({ data }) => {
    const {
        production,
        director,
        writers,
        stars,
        country,
        language,
        budget,
        gross_worldwide,
        gross_usa,
        opening_week_usa,
    } = data;

    const detailsColumns = [
        { title: "Director", value: director },
        {
            title: "Writers",
            value: writers
                .filter((writer) => {
                    return writer !== " ";
                })
                .join(", "),
        },
        {
            title: "Stars",
            value: stars
                .filter((name) => {
                    return name !== " ";
                })
                .join(", "),
        },
        {
            title: "Production Co.",
            value: production
                .filter((company) => {
                    return company !== " ";
                })
                .join(", "),
        },
        {
            title: "Country",
            value: country
                .filter((name) => {
                    return name !== " ";
                })
                .join(", "),
        },
        {
            title: "Language",
            value: language
                .filter((name) => {
                    return name !== " ";
                })
                .join(", "),
        },
    ];

    const budgetColumns = [
        { title: "Budget", value: budget },
        { title: "Gross Worldwide", value: gross_worldwide },
        { title: "Gross USA", value: gross_usa },
        { title: "Opening week USA", value: opening_week_usa },
    ];

    return [detailsColumns, budgetColumns];
};

export default movieDetails;
