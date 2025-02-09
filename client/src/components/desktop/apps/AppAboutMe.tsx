import { AppMarkdownLayout } from "@/components/desktop/apps/layout/AppMarkdownLayout";

const md = `
## **About me**
Fahmi, Bandung, West Java, ID  
Origin: Indonesia  

<br />

## **What I do**
Software Engineer. Tinkerer. Hacker.  

<br />

## **Tech stacks I worked on**
- **CI/CD Tools**: GitLab CI, GitHub Actions, Jenkins
- **Cloud Platforms**: Google Cloud Platform (GCP), AWS, Digital Ocean, Linode, Biznet Gio
- **Containerization**: Docker, Docker Swarm, Kubernetes, OpenShift OKD
- **Automation & Scripting**: Bash, Python, Golang
- **Infrastructure Management**: Linux, Windows Server, Terraform, Ansible
- **Monitoring and Security**: Prometheus, Grafana, Sentry APM, Datadog, SonarQube, Fluid Attack

<br />

## **Languages I speak**
- Indonesian (native)
- English (B2)
- Arabic (C2)

<br />

## **Currently interested about:**
- Cloud Native Computing
- Automation & Scripting
- Security
- Image Generation like [Stable Diffusion](https://huggingface.co/spaces/stabilityai/stable-diffusion) ...
- LLM

<br />

## **My Take on DevOps Engineering**
- A collaborative approach between development and operations is key to improving efficiency.
- Be Lazy. Automation should always be prioritized to reduce manual errors and speed up delivery.
- Security and cost-effectiveness should be integral to all processes.
- Continuous learning and adaptation are essential in the fast-evolving tech landscape.

<br />

**Hobbies**
- Learning something new, even it is cooking.
- Writing technical articles; I'm preparing a [blog](https://dev.to/fahmimmaliki) to share insights and knowledge!
- Developing and tinkering with DIY tech projects.

`;

export function AppAboutMe() {
  return <AppMarkdownLayout title="About Me" markdown={md} />;
}
