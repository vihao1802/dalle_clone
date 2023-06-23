import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt : any) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}

export async function downloadImage(_id:any, photo:any) {
    FileSaver.saveAs(photo,`download-${_id}.jpg`)
}

export function checkDarkmode() {
  const toggleSwitch = document.querySelector('.toggle-switch') as HTMLInputElement;
  const currentTheme = localStorage.getItem("theme");
  
  if (toggleSwitch !== null && currentTheme) {
    document.documentElement.setAttribute("class", currentTheme);
    if (currentTheme === "dark") {
      const toggleSwitchInput = document.querySelector('.toggle-switch input[type="checkbox"]') as HTMLInputElement;
      if(toggleSwitchInput !== null)
          toggleSwitch.checked = true;
          toggleSwitchInput.checked = true;
    }
  }
}

export function useColorScheme(e: any) {
    if (e.target.checked) {
        document.documentElement.setAttribute("class", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("class", "light");
        localStorage.setItem("theme", "light");
      }
}