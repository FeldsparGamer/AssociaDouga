const carousel = document.getElementById('carousel');
const infoTitle = document.getElementById('info-title');
const infoText = document.getElementById('info-text');
const infoImage = document.getElementById('info-image');

const socialLinks = {
    Sonnic: {
        instagram: "https://instagram.com/sonnic2024",
        youtube: "https://www.youtube.com/@elvinnic1998",
        bluesky: "https://bsky.app/profile/sonnic1998.bsky.social",
        scratch: "https://scratch.mit.edu/users/Sonnic1998",
        discord: "sonnic1998"
    },
    Adriel: {
        instagram: "https://instagram.com/adriel_trenzl",
        youtube: "https://www.youtube.com/@TrenZL",
        twitter: "https://twitter.com/Speedyopenbve",
        scratch: "https://scratch.mit.edu/users/AdrielCrafter/",
        discord: "trenzl"
    },
    JohnmakerX: {
        instagram: "https://www.instagram.com/jmtc.art/",
        youtube: "https://www.youtube.com/@johnmakerx",
        scratch: "https://scratch.mit.edu/users/johnmakerX/",
        discord: "johnmakerx",
        server: "https://discord.gg/3fuGd63c"
    },
    Edamaku: {
        youtube: "https://www.youtube.com/@arceuspistola",
        scratch: "https://scratch.mit.edu/users/ArceusPistola/",
        discord: "edaimaku"
    },
    Mashed: {
        youtube: "https://www.youtube.com/@SonicAndRafa",
        scratch: "https://scratch.mit.edu/users/MASHEDGAMES/",
        discord: "mashed6377"
    },
    Miguelitopira: {
        youtube: "https://www.youtube.com/@miguelitopira361",
        scratch: "https://scratch.mit.edu/users/miguelitopira/",
        reddit: "https://www.reddit.com/u/MiguelitoPira",
        discord: "miguelitopira",
        twitter: "https://x.com/Miguelitopira_F",
        server: "https://discord.com/invite/MXPxf9Qz2s"
    },
    Liam: {
        instagram: "https://www.instagram.com/liamquezada_",
        youtube: "https://www.youtube.com/@LiamQuezada",
        twitter: "https://x.com/Liam_Quezada",
        scratch: "https://scratch.mit.edu/users/LiamQuezada/",
        reddit: "https://www.reddit.com/user/LiamQuezada/",
        subreddit: "https://www.reddit.com/r/LiamQuezada/?share_id=gqfphcS63OUM8rtqP5ST-&utm_content=1&utm_medium=ios_app&utm_name=ioscss&utm_source=share&utm_term=1",
        discord: "liamquezada",
        server: "https://discord.com/invite/GxqYmNjqfs"
    },
    Bitzin: {
        youtube: "https://www.youtube.com/@bite_plusofc",
        bluesky: "https://bsky.app/profile/biteplusofc.bsky.social",
        scratch: "https://scratch.mit.edu/users/BitzinPlusOficial/"
    },
    Map: {
        scratch: "https://scratch.mit.edu/users/map_the_pc/",
        discord: "mapsaldanha",
        twitter: "https://x.com/mapsaldanha",
        server: "https://discord.gg/ycgDAn32"
    },
    Patrão: {
        scratch: "https://scratch.mit.edu/users/patrao_ne_pai/",
        discord: "ranirru",
        server: "https://discord.gg/Rdt5zYuz"
    }
    // Adicione outros personagens aqui
};

// Função para deslizar o carrossel
function slideCarousel(direction) {
    const scrollAmount = 120; // Ajuste conforme necessário
    carousel.scrollBy({
        top: 0,
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}

// Função para atualizar as informações ao clicar em uma imagem do carrossel
function updateInfo(title, description, imageSrc) {
    infoTitle.textContent = title;
    infoText.textContent = description;
    infoImage.src = imageSrc;
}

function updateSocialLinks(character) {
    const links = socialLinks[character];

    // Atualiza cada link se existir no personagem
    if (links.instagram) {
        document.getElementById("instagram-link").href = links.instagram;
        document.getElementById("instagram-link").style.display = "inline-flex";
    } else {
        document.getElementById("instagram-link").style.display = "none";
    }

    if (links.youtube) {
        document.getElementById("youtube-link").href = links.youtube;
        document.getElementById("youtube-link").style.display = "inline-flex";
    } else {
        document.getElementById("youtube-link").style.display = "none";
    }

    if (links.bluesky) {
        document.getElementById("bluesky-link").href = links.bluesky;
        document.getElementById("bluesky-link").style.display = "inline-flex";
    } else {
        document.getElementById("bluesky-link").style.display = "none";
    }

    if (links.twitter) {
        document.getElementById("twitter-link").href = links.twitter;
        document.getElementById("twitter-link").style.display = "inline-flex";
    } else {
        document.getElementById("twitter-link").style.display = "none";
    }

    if (links.scratch) {
        document.getElementById("scratch-link").href = links.scratch;
        document.getElementById("scratch-link").style.display = "inline-flex";
    } else {
        document.getElementById("scratch-link").style.display = "none";
    }

    if (links.reddit) {
        document.getElementById("reddit-link").href = links.reddit;
        document.getElementById("reddit-link").style.display = "inline-flex";
    } else {
        document.getElementById("reddit-link").style.display = "none";
    }

    if (links.subreddit) {
        document.getElementById("subreddit-link").href = links.reddit;
        document.getElementById("subreddit-link").style.display = "inline-flex";
    } else {
        document.getElementById("subreddit-link").style.display = "none";
    }

    if (links.server) {
        document.getElementById("server-link").href = links.server;
        document.getElementById("server-link").style.display = "inline-flex";
    } else {
        document.getElementById("server-link").style.display = "none";
    }

    if (links.discord) {
        // Define o título (tooltip) com o username do Discord
        const discordLink = document.getElementById("discord-link");
        discordLink.removeAttribute("href"); // Remove o link para que não seja clicável
        discordLink.title = links.discord; // Exibe o username como tooltip
        discordLink.style.display = "inline-flex";
    } else {
        document.getElementById("discord-link").style.display = "none";
    }
}
