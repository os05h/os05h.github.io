// Definer temaer her - let at tilføje flere!
export const themes = {
    blueOcean: {
        name: "Blue Ocean",
        colors: {
            primary: "#1a759f",      // Cerulean
            secondary: "#184e77",    // IndigoDye
            accent: "#52b69a",       // Keppel
            accentLight: "#d9ed92",  // Mindaro
            background: "#1a759f",   // Cerulean
            cardBg: "#eff7ff",       // OffWhite
            text: "#1a759f",         // Cerulean
            navBg: "#1e6091",        // LapisLazuli
        }
    },
    forest: {
        name: "Forest Green",
        colors: {
            primary: "#2d6a4f",
            secondary: "#1b4332",
            accent: "#40916c",
            accentLight: "#95d5b2",
            background: "#1b4332",
            cardBg: "#d8f3dc",
            text: "#1b4332",
            navBg: "#081c15",
        }
    },
    sunset: {
        name: "Sunset",
        colors: {
            primary: "#d97706",
            secondary: "#92400e",
            accent: "#f59e0b",
            accentLight: "#fcd34d",
            background: "#92400e",
            cardBg: "#fef3c7",
            text: "#92400e",
            navBg: "#78350f",
        }
    },
    midnight: {
        name: "Midnight Purple",
        colors: {
            primary: "#6366f1",
            secondary: "#4f46e5",
            accent: "#a28bfa",
            accentLight: "#e9d5ff",
            background: "#312e81",
            cardBg: "#ede9fe",
            text: "#4338ca",
            navBg: "#3730a3",
        }
    }
};

export const defaultTheme = "blueOcean";

export function getTheme(themeName) {
    return themes[themeName] || themes[defaultTheme];
}
