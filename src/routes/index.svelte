<script>
    import Slider from '$lib/components/slider.svelte';
    import ProjectCard from '$lib/components/projectCard.svelte';
    import LinkedIn from '$lib/icons/linkedin.svelte';
    import GitHub from '$lib/icons/github.svelte';

    let showWave = false;
    let offsetX = 0;
    let trackWidth = 640;
    const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
    $: selectedYear = years[Math.floor((offsetX + 80) / trackWidth * 8) - 1];

    const yearsText = [
        "In 2015 I joined the IDF. After basic training I went on a Computer Network Management course in Basmach, the IDF School for Computer Professions.<br/>\
        After finishing the course with distinction I was assigned to Basmach's IT and DevOps department, which is considered one of the best in the IDF.",
        "In 2016 I was working on various different projects as part of my job in the IT and DevOps department of Basmach, most of them were scripting with PowerShell.<br/>\
        Having access to all of Basmach's courses, I used my spare time to learn about Design and Programming, specifically Web Development.<br/>\
        I started working on a website, where people from Basmach can find information about common technical issues and send tickets to our team. It was built with jQuery.",
        "In 2017 I was tasked with making the official website for Basmach.<br/>\
        The success of the website made me even more passionate for Web Development, which led me to start learning Angular 1, and soon after that I switched to React.<br/>\
        By that time I was also given some DevOps responsibilities, and I had learned about Linux, Docker and CI/CD.",
        "In 2018 I was assigned co-leader of the IT and DevOps department of Basmach.<br/>\
        I was responsible for maintaining dozens of windows and linux servers and virtual machines, and for the provisioning of new servers whenever necessary.<br/>\
        On March 2018 I left the IDF.",
        "In 2019 I started studying Computer Science at the Academic College of Tel-Aviv Yaffo.<br/>\
        ",
        "In 2020 I",
        "In 2021 I",
        "In 2022 I"
    ]
</script>

<head>
    <title>Kfir Fitousi | Front End Developer</title>
</head>

<div class="conatiner max-w-2xl m-auto px-4">
    
    <div>
        <img 
            src="/kfir.jpg"
            alt="Kfir Fitousi" 
            class="p-1 w-40 h-40 mx-auto mt-6 rounded-full" 
        />
        <div class="pic-border w-40 h-40 border-2 border-t-[#d27884] border-x-zinc-800 border-b-[#3271aa] rounded-full"></div>
    </div>

    <div class="flex flex-row justify-center mt-2">
        <h1 class="text-3xl text-zinc-200 text-center"
            on:mouseover={() => showWave = true}
            on:focus={() => showWave = true}
            on:mouseout={() => showWave = false}
            on:blur={() => showWave = false}
        >
            Kfir Fitousi
            {#if showWave}
                <span class="wave text-3xl absolute">&nbsp;&#128075;</span>
            {/if}
        </h1>
    </div>
    <h2 class="text-lg text-zinc-200 text-center mb-2">Front End Developer</h2>

    <div class="flex flex-row justify-center space-x-3 mb-6">
        <a href="https://www.linkedin.com/in/kfirp/" target="_blank">
            <LinkedIn />
        </a>
        <a href="https://github.com/kp2c" target="_blank">
            <GitHub />
        </a>
    </div>

    <p class="w-10 md:w-14 h-5 mx-3 mb-3.5 text-xs md:text-base leading-5 md:leading-5 bg-pink-900 text-zinc-50 text-center rounded-lg select-none"
        style="transform: translateX({ offsetX }px)"
    >
        {selectedYear}
    </p>

    <Slider bind:offsetX bind:trackWidth />

    <div class="w-full bg-zinc-50 pt-1 rounded-b-lg">
        <p class="text-sm text-center text-gray-600">
            Drag the racecar across the track to progress through the timeline
        </p>
        <p class="py-4 px-8 text-zinc-800">
            {@html yearsText[selectedYear - 2015]}
        </p>
    </div>

    <h1 class="text-3xl text-zinc-200 text-center mt-10">Projects</h1>

    <div class="flex flex-wrap justify-center space-y-3 mt-4">
        <ProjectCard 
            title="Pasta Quiz"
            subtitle="Put your pasta knowledge to the test!"
            summary="Built with TypeScript, Next.js and TailwindCSS."
            image="/pasta-quiz.webp"
            link="https://pasta-quiz.vercel.app"
            github="https://github.com/kp2c/pasta-quiz" 
        />
        <ProjectCard 
            title="WHILE Compiler"
            subtitle="Online interpreter and compiler for a programming language called WHILE."
            summary="Built with TypeScript, SvelteKit and TailwindCSS."
            image="/while-compiler.webp"
            link="https://while-compiler.vercel.app"
            github="https://github.com/kp2c/while-compiler" 
        />
        <ProjectCard 
            title="Arous Elbahar Style"
            subtitle="Second-hand store website for Arous Elbahar, a non-profit organization."
            summary="Built with Shopify. Not yet available."
            image="/arous-style.webp"
        />
    </div>
</div>

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

    .wave {
        animation: wave-animation infinite 2.5s;
        transform-origin: 70% 70%;
    }

    @keyframes wave-animation {
        0% { transform: rotate( 0.0deg) }
        10% { transform: rotate(14.0deg) } 
        20% { transform: rotate(-8.0deg) }
        30% { transform: rotate(14.0deg) }
        40% { transform: rotate(-4.0deg) }
        50% { transform: rotate(10.0deg) }
        60% { transform: rotate( 0.0deg) }
        100% { transform: rotate( 0.0deg) }
    }
</style>