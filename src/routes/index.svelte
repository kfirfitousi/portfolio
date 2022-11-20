<script lang="ts">
    import ThemeSwitcher from '$lib/components/ThemeSwitcher';
    import IconWithTooltip from '$lib/components/IconWithTooltip';
    import Timeline from '$lib/components/Timeline';
    import ProjectCard from '$lib/components/ProjectCard';
    import { LinkedIn, GitHub, Email } from '$lib/components/Icons';
    import { years, yearsText } from '$lib/data/timeline.json';
</script>

<svelte:head>
    <title>Kfir Fitousi | Full Stack Developer</title>
    <meta
        name="description"
        content="I'm Kfir Fitousi, a Full Stack Developer. 
        I have experience with TypeScript, React, Next.js and more.
        Here I will showcase some of the things I'm working on."
    />
</svelte:head>

<main class="conatiner max-w-2xl mx-auto px-4">
    <div class="w-fit h-0 ml-auto z-10">
        <ThemeSwitcher />
    </div>

    <section class="mt-5">
        <img
            src="/kfir.webp"
            alt="Kfir Fitousi"
            class="p-1 w-40 h-40 mx-auto rounded-full bw:grayscale"
        />
        <div
            class="pic-border w-40 h-40 border-2 border-t-[#d27884] border-b-[#3271aa] 
                border-x-transparent rounded-full bw:grayscale"
        />

        <h1
            class="flex flex-col justify-center space-x-0 sm:space-x-2 sm:flex-row mt-2 
                italic text-4xl text-primary text-center neon:animate-neon-text neon:tracking-wider"
        >
            <span>Kfir Fitousi</span>
            <span>כפיר פיטוסי</span>
        </h1>
        <h2
            class="text-xl text-primary text-center mb-2 neon:animate-neon-text neon:tracking-widest"
        >
            Full Stack Developer
        </h2>

        <div class="flex flex-row justify-center space-x-3 mb-12">
            <IconWithTooltip
                tip="My profile on LinkedIn"
                link="https://www.linkedin.com/in/kfirp"
                icon={LinkedIn}
            />
            <IconWithTooltip
                tip="My profile on GitHub"
                link="https://github.com/kfirfitousi"
                icon={GitHub}
            />
            <IconWithTooltip tip="My Email" link="mailto:kfirfitousi@gmail.com" icon={Email} />
        </div>
    </section>

    <Timeline {years} {yearsText} />

    <section class="flex flex-wrap justify-center space-y-5 mt-12">
        <h1
            class="text-3xl text-primary text-center mb-1 neon:animate-neon-text neon:tracking-wider"
        >
            Projects
        </h1>
        <ProjectCard
            title="Kfir's Blog"
            subtitle="Blog app built using Next.js 13's new features"
            summary="Includes mdx support, syntax-highlighting, dark mode and more. Built with React, TypeScript, Next.js, Zustand, next-mdx-remote and TailwindCSS"
            image="/blog.webp"
            link="https://blog.kfirfitousi.com"
            github="https://github.com/kfirfitousi/blog"
            lazyImage={false}
        />
        <ProjectCard
            title="Pasta Quiz"
            subtitle="Pasta shape quiz app"
            summary="Built with React, TypeScript, Next.js, Supabase and TailwindCSS"
            image="/pasta-quiz.webp"
            link="https://pasta.kfirfitousi.com"
            github="https://github.com/kfirfitousi/pasta-quiz"
        />
        <ProjectCard
            title="WHILE Compiler"
            subtitle="Online interpreter and compiler for a programming language called WHILE"
            summary="Built with TypeScript, SvelteKit and TailwindCSS"
            image="/while-compiler.webp"
            link="https://while.kfirfitousi.com"
            github="https://github.com/kfirfitousi/while-compiler"
        />
        <ProjectCard
            title="Buy in Style"
            subtitle="Online catalog for Arous Elbahar's second-hand store"
            summary="Built with React, Next.js, TypeScript, React Query, TailwindCSS and Contentful CMS"
            image="/arous-style.webp"
            github="https://github.com/kfirfitousi/arous-style"
        />
    </section>
</main>

<style>
    .pic-border {
        position: absolute;
        top: 1.5rem;
        left: calc(50% - 5rem);
    }

    .pic-border:hover {
        transform: rotate(360deg);
        transition: ease-out 1s;
    }
</style>
