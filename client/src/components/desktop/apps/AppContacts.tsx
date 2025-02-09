import { AppMarkdownLayout } from "@/components/desktop/apps/layout/AppMarkdownLayout";

const md = `
 **Email**

[fahmi.mmaliki@gmail.com](mailto:fahmi.mmaliki@gmail.com)

<br />

**LinkedIn**

[Fahmi Mahmud Maliki](https://www.linkedin.com/in/fahmimmaliki/)

<br />

**GitHub**

[fahmimmaliki](https://github.com/fahmimmaliki/)

<br />

**Stack Overflow**

[fahmi-mahmud-maliki](https://stackoverflow.com/users/11349002/fahmi-mahmud-maliki)

<br />

**Twitter (inactive)**

[@fahmimmaliki](https://x.com/fahmimmaliki)
 
`;

export function AppContacts() {
  return <AppMarkdownLayout markdown={md} title="Contacts" />;
}
