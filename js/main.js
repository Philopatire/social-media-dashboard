let colorSwitcher = document.getElementById("color_switcher");
let root = document.querySelector(":root");
let whitePallete = {
  background: "hsl(0, 0%, 100%)",
  topBgPattern: "hsl(225, 100%, 98%)",
  cardBackground: "hsl(227, 47%, 96%)",
  cardBackgroundHover: "hsl(232deg 33% 91%)",
  textOne: "hsl(228, 12%, 44%)",
  textTwo: "hsl(230, 17%, 14%)",
};
let blackPallete = {
  background: "hsl(230, 17%, 14%)",
  topBgPattern: "hsl(232, 19%, 15%)",
  cardBackground: "hsl(228, 28%, 20%)",
  cardBackgroundHover: "hsl(228deg 26% 27%)",
  textOne: "hsl(228, 34%, 66%)",
  textTwo: "hsl(0, 0%, 100%)",
};
colorSwitcher.onclick = () => {
  if (colorSwitcher.classList.contains("dark")) {
    colorSwitcher.classList.remove("dark");
    root.style.setProperty("--background", whitePallete.background);
    root.style.setProperty("--top-bg-pattern", whitePallete.topBgPattern);
    root.style.setProperty("--card-background", whitePallete.cardBackground);
    root.style.setProperty(
      "--card-background-hover",
      whitePallete.cardBackgroundHover
    );
    root.style.setProperty("--text-one", whitePallete.textOne);
    root.style.setProperty("--text-two", whitePallete.textTwo);
  } else {
    colorSwitcher.classList.add("dark");
    root.style.setProperty("--background", blackPallete.background);
    root.style.setProperty("--top-bg-pattern", blackPallete.topBgPattern);
    root.style.setProperty("--card-background", blackPallete.cardBackground);
    root.style.setProperty(
      "--card-background-hover",
      blackPallete.cardBackgroundHover
    );
    root.style.setProperty("--text-one", blackPallete.textOne);
    root.style.setProperty("--text-two", blackPallete.textTwo);
  }
};
