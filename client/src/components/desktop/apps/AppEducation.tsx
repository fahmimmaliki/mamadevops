import { AppMarkdownLayout } from "@/components/desktop/apps/layout/AppMarkdownLayout";

const md = `
  
## Education
<br />
UIN Sunan Gunung Djati Bandung, Indonesia
<br />
Bachelor's Degree in Informatics Engineering, 2018

<br />

3.19 / 4.00 GPA

<br />

Research Thesis: Final Project Topic Selection Recommendation System Based on Course Grade Acquisition

<br />

`;

export function AppEducation() {
  return <AppMarkdownLayout markdown={md} title="Education" />;
}
