import IconWithTooltip from '../lib/components/iconWithTooltip.svelte'
import LinkedIn from '../lib/icons/linkedin.svelte'
import GitHub from '../lib/icons/github.svelte'
import Email from '../lib/icons/email.svelte'
import '../app.css'

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
    Icon: LinkedIn
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