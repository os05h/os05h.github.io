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
    midnight: {
        name: "Midnight Dark",
        colors: {
            primary: "#e0e7ff",
            secondary: "#c7d2fe",
            accent: "#a78bfa",
            accentLight: "#ddd6fe",
            background: "#0f0a1a",
            cardBg: "#1f1535",
            text: "#e0e7ff",
            navBg: "#2d1b4a",
        }
    },
    black: {
        name: "Pure Black",
        colors: {
            primary: "#ffffff",
            secondary: "#e5e5e5",
            accent: "#00d9ff",
            accentLight: "#4dffff",
            background: "#000000",
            cardBg: "#1a1a1a",
            text: "#ffffff",
            navBg: "#0d0d0d",
        }
    }
};

export const defaultTheme = "blueOcean";

export function getTheme(themeName) {
    return themes[themeName] || themes[defaultTheme];
}
