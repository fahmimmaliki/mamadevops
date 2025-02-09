// import { ExternalLinkIcon } from "@chakra-ui/icons";  // Ensure you import the ExternalLinkIcon if using Chakra UI
import { AppMarkdownLayout } from "@/components/desktop/apps/layout/AppMarkdownLayout";


const md = `
## **About This Site**
Welcome to **Fahmi Codex**! This site serves as a personal project and a showcase of my journey in software engineering and DevOps. Here, you will find resources, articles, and tools that reflect my experiences and interests in technology.

<br />

## **Source Code**
The source code for this project is available on GitHub:

[GitHub Repository](https://github.com/fahmimmaliki/mamadevops) <ExternalLinkIcon />

<br />

## **Original Creator**
This project draws inspiration from the original creator:  
[https://fahru.me/](https://fahru.me/) <ExternalLinkIcon />  
The source code can be found here:  
[GitHub Repository of Original Creator](https://github.com/mfakhrusy/fahru.me) <ExternalLinkIcon />

<br />

## **Tech Stack & Libraries**
This site is built using a modern tech stack, which includes:
- **TypeScript** - for type safety and development efficiency
- **ReactJS** - for building interactive user interfaces
- **Next.js** - for server-side rendering and static site generation
- **xterm.js** - for terminal emulation
- **Chakra UI** - for building accessible React apps with speed
- **Framer Motion** - for animations and transitions

<br />

## **Icons and Assets**
The icons used throughout the site are sourced from [Moka Icons](https://snwh.org/moka) by [Sam Hewitt](https://samuelhewitt.com), licensed under [CC-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/) <ExternalLinkIcon />.

<br />

## **Background Assets**
The background is derived from a collection available on GitHub and AI Generated Images from [Ideogram](https://ideogram.ai/.com/).
[Open Wallpapers by PineAndApplePizza](https://github.com/PineAndApplePizza/open-wallpapers/) and is licensed under [GPL](https://www.gnu.org/licenses/gpl-3.0.html).  
The original logo was created by [u/Ishaan_P](https://www.reddit.com/user/Ishaan_P).

<br />

## **Get Involved**
I encourage collaboration and community feedback! Feel free to contribute from the GitHub repository or connect with me through my social links.
`;

export function AppAboutSite() {
  return <AppMarkdownLayout markdown={md} title="About Site" />;
}