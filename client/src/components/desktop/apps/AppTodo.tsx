import { AppMarkdownLayout } from "@/components/desktop/apps/layout/AppMarkdownLayout";

const md = `
List of things that I want to implement in the future: (no promises and in no particular order! edit: 2023 and still no promises)

<br />

- Theme switcher
- Accessibility support (e.g. screen reader)
- Blog reader from the desktop
`;

export function AppTodo() {
  return <AppMarkdownLayout markdown={md} title="Todo" />;
}
