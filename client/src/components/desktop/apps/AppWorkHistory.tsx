import { AppMarkdownLayout } from "@/components/desktop/apps/layout/AppMarkdownLayout";

const md = `
# Experience

## DevOps Engineer

**Gak Gendut Lagi (GGL)**  

*Nov 2022 – Aug 2024*  

**Company Background**: Gak Gendut Lagi (GGL) is Indonesia's No.1 Fatloss Coaching Community trused by more than 300k members.

- Achieved a 25% cost reduction by migrating to Google Kubernetes Engine (GKE), implementing Prometheus and Grafana, and optimizing infrastructure monitoring and analytics, resulting in monthly savings of approximately IDR 12 million.
- Led a successful migration from Google Cloud Engine (GCE) to Biznet Gio, resulting in a 44.6% cost reduction and monthly savings of approximately IDR 5 million.
- Strengthened application security by integrating SonarQube and Fluid Attack for vulnerability scanning, specifically mitigating OWASP Top 10 A06:2021 - "Vulnerable and Outdated Components."
- Automated SSL certificate renewal using GitHub Actions, Certbot, and Cloudflare, resulting in a measurable reduction in downtime by 90% and enhancing application security, which improved Service Level Agreement (SLA) compliance by 15%.
- Established centralized documentation using docusaurus with search capabilities improve engineer productivity up to 30%.
- Conducted incident response and post-mortem analyses for server outages, including troubleshooting MeiliSearch indexing, MySQL freezes, Sentry APM downtime, and Laravel backend issues.
- Designed and implemented a real-time chat server using Firebase Cloud Messaging (FCM), supporting a user base of ~4,000.
- Performed stress testing and load testing with Golang, Tsung, Gatling, K6, and Jmeter to ensure system robustness.
- Managed application performance monitoring with Sentry APM.

## DevOps Engineer

**Kinnara Digital Studio**  

*Jul 2019 - Nov 2022*  

**Company Background**: Kinnara Digital Studio is a digital solutions agency specializing in creating tailored software and applications for various industries, including healthcare, finance, and e-government. The firm focuses on leveraging technology to improve operational efficiency and user experiences.

- Deployed and managed a scalable Docker Swarm cluster for a state-owned enterprise's e-approval application, utilizing nginx’s IP hash algorithm for load balancing.
- Built CI/CD pipelines with GitLab CI for Java and PHP projects, utilizing Maven, Composer, npm, and Ant for build management.
- Managed deployment and scaling for Java and Laravel applications on OpenShift OKD.
- Oversaw ERP systems, including Odoo and Openbravo, to support business operations.
- Proactively identified and resolved web server issues on Apache, Nginx, and Tomcat, including SSL certificate renewal.
- Managed cloud infrastructure across Linode, Digital Ocean, and GCP for reliable and scalable operations.
- Established automated documentation workflows with Jekyll, maintaining up-to-date version control for documentation.
- Promoted DevOps culture with the adoption of Docker, Prometheus, Grafana, Jenkins, and SonarQube.

## Software Engineer

**Kinnara Digital Studio**  

*Jan 2019 - Jun 2019*  

**Company Background**: Kinnara Digital Studio is not only a digital solutions agency but also a nurturing ground for budding technology professionals, focusing on skill development and innovative project delivery.

- Developed spreadsheet plugins for Kecak workflow and resolved interim participant plugin issues.
`;

export function AppWorkHistory() {
  return <AppMarkdownLayout markdown={md} title="Work History" />;
}