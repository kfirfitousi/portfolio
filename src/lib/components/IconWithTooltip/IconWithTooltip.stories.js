import IconWithTooltip from './IconWithTooltip.svelte';
import { LinkedIn, GitHub, Email} from '$lib/icons'
import '/src/app.css'

export default {
    title: "Icon with Tooltip",
    component: IconWithTooltip,
}

const Template = (args) => ({
    Component: IconWithTooltip,
    props: args
});

export const LinkedinIcon = Template.bind({});
LinkedinIcon.args = {
    tip: "My profile on LinkedIn",
    link: "https://www.linkedin.com/in/kfirp",
    icon: LinkedIn
}

export const GithubIcon = Template.bind({});
GithubIcon.args = {
    tip: "My profile on GitHub",
    link: "https://github.com/kp2c",
    Icon: GitHub
}

export const EmailIcon = Template.bind({});
EmailIcon.args = {
    tip: "My email",
    link: "mailto:kfirp84@gmail.com",
    Icon: Email
}