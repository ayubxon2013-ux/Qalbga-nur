/* =========================================================
   QALBGA NUR
   FULL ONLINE BOOK ENGINE
========================================================= */

"use strict";


/* =========================================================
   BOOK DATA
========================================================= */

const chapters = [

    {
        id: 1,
        category: "ibodat",
        icon: "🤲",
        title: "Allohga yaqinlik",
        description: "Iymon, tavakkul, zikr va qalbni poklash haqida.",
        pages: [

            {
                id: 101,
                title: "Allohga yaqin bo‘lish",
                content: `
                    <p>
                        Inson qalbi doimo xotirjamlik va ma’no izlaydi.
                        Haqiqiy xotirjamlik esa Allohni eslash,
                        Unga tavakkul qilish va Unga itoat etish bilan
                        bog‘liqdir.
                    </p>

                    <p>
                        Allohga yaqinlik faqat so‘z bilan emas, balki
                        qalbdagi ixlos, yaxshi amal, sabr va go‘zal
                        axloq bilan namoyon bo‘ladi.
                    </p>

                    <blockquote>
                        “Ogoh bo‘lingizkim, qalblar Allohni zikr qilish
                        bilan orom olur.”
                        <span class="source">
                            Qur’on, Ra’d surasi, 28-oyat
                        </span>
                    </blockquote>

                    <p>
                        Har kuni oz bo‘lsa ham Qur’on o‘qish,
                        duo qilish, yaxshilik qilish va gunohlardan
                        uzoqlashishga harakat qilish qalbni
                        mustahkamlaydi.
                    </p>
                `
            },

            {
                id: 102,
                title: "Tavakkul",
                content: `
                    <p>
                        Tavakkul — sabablarni qilish bilan birga
                        natijani Allohga topshirishdir.
                    </p>

                    <p>
                        Inson o‘z vazifasini bajaradi, harakat qiladi,
                        maslahatlashadi va imkon qadar to‘g‘ri yo‘lni
                        tanlaydi. Keyin esa Allohning taqdiriga rozi
                        bo‘lishga intiladi.
                    </p>

                    <blockquote>
                        “Kim Allohga tavakkul qilsa, bas, U unga kifoya.”
                        <span class="source">
                            Qur’on, Talaq surasi, 3-oyat
                        </span>
                    </blockquote>

                    <p>
                        Tavakkul dangasalik emas. U harakatdan keyingi
                        qalb xotirjamligidir.
                    </p>
                `
            },

            {
                id: 103,
                title: "Zikr va qalb",
                content: `
                    <p>
                        Zikr — Allohni eslashdir. Til bilan aytiladigan
                        zikr bilan birga qalbning ham Allohni eslab
                        turishi muhim.
                    </p>

                    <p>
                        Zikr insonni yaxshi ishlarni ko‘paytirishga,
                        yomon ishlardan uzoqlashishga va qalbini
                        hushyor tutishga yordam beradi.
                    </p>

                    <blockquote>
                        “Meni eslangiz, Men ham sizlarni eslayman.”
                        <span class="source">
                            Qur’on, Baqara surasi, 152-oyat
                        </span>
                    </blockquote>
                `
            }

        ]
    },


    {
        id: 2,
        category: "ibodat",
        icon: "🕌",
        title: "Namoz",
        description: "Namozning ahamiyati, ixlos va xushu’ haqida.",
        pages: [

            {
                id: 201,
                title: "Namozning o‘rni",
                content: `
                    <p>
                        Namoz musulmon hayotidagi ulug‘ ibodatlardan
                        biridir. U bandaning Robbisi bilan bog‘lanishini
                        eslatib turadi.
                    </p>

                    <p>
                        Namozni shunchaki odat sifatida emas, Alloh
                        huzurida turgandek mas’uliyat va ixlos bilan
                        ado etishga intilish kerak.
                    </p>

                    <blockquote>
                        “Albatta, namoz fahsh va munkardan qaytarur.”
                        <span class="source">
                            Qur’on, Ankabut surasi, 45-oyat
                        </span>
                    </blockquote>
                `
            },

            {
                id: 202,
                title: "Xushu’ bilan namoz",
                content: `
                    <p>
                        Xushu’ — qalbning Alloh huzurida kamtarligi,
                        qo‘rquv va umid bilan bo‘lishidir.
                    </p>

                    <p>
                        Namoz vaqtida diqqatni jamlash, aytilayotgan
                        oyat va zikrlarning ma’nosini tushunishga
                        harakat qilish xushu’ni kuchaytirishi mumkin.
                    </p>

                    <p>
                        Xushu’ bir kunda mukammal bo‘lib qolmaydi.
                        U sabr va muntazam mashq bilan rivojlanadi.
                    </p>
                `
            },

            {
                id: 203,
                title: "Namozni qadrlash",
                content: `
                    <p>
                        Vaqt tez o‘tadi. Namoz esa kun davomida insonni
                        to‘xtab, Robbisini eslashga chorlaydi.
                    </p>

                    <p>
                        Shuning uchun namozni imkon qadar vaqtida,
                        poklik va ixlos bilan ado etishga intilish
                        musulmonning muhim vazifalaridan biridir.
                    </p>
                `
            }

        ]
    },


    {
        id: 3,
        category: "axloq",
        icon: "❤️",
        title: "Go‘zal axloq",
        description: "Sabr, halollik, kechirimlilik va ota-onaga hurmat.",
        pages: [

            {
                id: 301,
                title: "Go‘zal muomala",
                content: `
                    <p>
                        Go‘zal axloq insonning eng chiroyli bezagidir.
                        Insonning boshqalarga qanday muomala qilishi
                        uning qalbidagi tarbiyani ko‘rsatadi.
                    </p>

                    <p>
                        Muloyim gapirish, va’daga vafo qilish,
                        yolg‘ondan saqlanish va boshqalarga ozor
                        bermaslik go‘zal muomalaning belgilaridandir.
                    </p>

                    <blockquote>
                        “Yaxshi so‘z — sadaqadir.”
                        <span class="source">
                            Sahih hadis mazmuni
                        </span>
                    </blockquote>
                `
            },

            {
                id: 302,
                title: "Ota-onaga hurmat",
                content: `
                    <p>
                        Ota-onaga yaxshilik qilish Islom ta’limotida
                        katta ahamiyatga ega.
                    </p>

                    <p>
                        Ularning oldida hurmat bilan gapirish,
                        yordam berish, ko‘nglini og‘ritmaslik va
                        ular uchun duo qilish yaxshi amallardandir.
                    </p>

                    <blockquote>
                        “Ularga uff demang va ularni jerkimang.”
                        <span class="source">
                            Qur’on, Isro surasi, 23-oyat
                        </span>
                    </blockquote>
                `
            },

            {
                id: 303,
                title: "Kechirimlilik",
                content: `
                    <p>
                        Inson xato qiladi. Boshqalarning xatosini
                        kechira olish qalbni og‘irlikdan xalos
                        qilishga yordam beradi.
                    </p>

                    <p>
                        Kechirimlilik zulmga ko‘z yumish degani emas.
                        Balki imkon bo‘lgan joyda yaxshilik va
                        yarashuvni tanlashdir.
                    </p>
                `
            }

        ]
    },


    {
        id: 4,
        category: "ibodat",
        icon: "🌙",
        title: "Ro‘za",
        description: "Ro‘zaning ma’nosi, sabr va taqvo haqida.",
        pages: [

            {
                id: 401,
                title: "Ro‘zaning ma’nosi",
                content: `
                    <p>
                        Ro‘za insonni nafsini tarbiyalashga,
                        sabr qilishga va Allohning ne’matlarini
                        qadrlashga o‘rgatadi.
                    </p>

                    <blockquote>
                        “Sizlardan ilgari o‘tganlarga farz qilinganidek,
                        sizlarga ham ro‘za farz qilindi, shoyad taqvodor
                        bo‘lsangiz.”
                        <span class="source">
                            Qur’on, Baqara surasi, 183-oyat
                        </span>
                    </blockquote>

                    <p>
                        Ro‘zaning maqsadi faqat ochlik va chanqoqlik
                        emas. Tilni yomon so‘zdan, ko‘zni haromdan,
                        qalbni yomon niyatdan saqlash ham muhimdir.
                    </p>
                `
            },

            {
                id: 402,
                title: "Sabr",
                content: `
                    <p>
                        Ro‘za insonni sabrga o‘rgatadi. Sabr esa
                        hayotning turli sinovlarida insonni
                        mustahkam qiladi.
                    </p>

                    <blockquote>
                        “Albatta, Alloh sabr qiluvchilar bilan birgadir.”
                        <span class="source">
                            Qur’on, Baqara surasi, 153-oyat
                        </span>
                    </blockquote>
                `
            }

        ]
    },


    {
        id: 5,
        category: "qissa",
        icon: "📖",
        title: "Odam alayhissalom",
        description: "Odam alayhissalom qissasidan ibratlar.",
        pages: [

            {
                id: 501,
                title: "Insonning yaratilishi",
                content: `
                    <p>
                        Qur’onda Odam alayhissalomning yaratilishi
                        va insonning yer yuzidagi hayoti haqida
                        muhim ma’lumotlar bayon qilingan.
                    </p>

                    <p>
                        Inson o‘zining kelib chiqishi va Robbisining
                        unga bergan ne’matlarini eslab, kibrdan
                        saqlanishi lozim.
                    </p>

                    <blockquote>
                        “Darhaqiqat, Biz Odam bolalarini mukarram qildik.”
                        <span class="source">
                            Qur’on, Isro surasi, 70-oyat
                        </span>
                    </blockquote>
                `
            },

            {
                id: 502,
                title: "Tavba va umid",
                content: `
                    <p>
                        Inson xato qilishi mumkin. Muhimi xatoda
                        davom etmasdan, Allohga qaytish va tavba
                        qilishga intilishdir.
                    </p>

                    <p>
                        Mo‘min inson umidsizlikka berilmaydi.
                        Allohning rahmatidan umid qiladi va
                        yaxshilik sari qaytadi.
                    </p>
                `
            }

        ]
    },


    {
        id: 6,
        category: "qissa",
        icon: "🌊",
        title: "Nuh alayhissalom",
        description: "Sabr, da’vat va Allohga tavakkul haqida.",
        pages: [

            {
                id: 601,
                title: "Uzoq sabr",
                content: `
                    <p>
                        Nuh alayhissalom o‘z qavmini uzoq vaqt davomida
                        haq yo‘lga chaqirgan payg‘ambarlardan biridir.
                    </p>

                    <p>
                        Uning qissasida sabr, qat’iyat va natijani
                        Allohga topshirish haqida katta ibratlar bor.
                    </p>

                    <p>
                        Inson yaxshi ish qilayotgan bo‘lsa, natija
                        darhol ko‘rinmasa ham to‘g‘ri yo‘ldan
                        qaytmasligi kerak.
                    </p>
                `
            },

            {
                id: 602,
                title: "Najot",
                content: `
                    <p>
                        Nuh alayhissalom qissasi Allohning amriga
                        itoat qilish va Uning va’dasiga ishonish
                        haqida chuqur saboq beradi.
                    </p>
                `
            }

        ]
    },


    {
        id: 7,
        category: "qissa",
        icon: "🌿",
        title: "Yusuf alayhissalom",
        description: "Sabr, poklik, kechirim va chiroyli oqibat.",
        pages: [

            {
                id: 701,
                title: "Sinovlar ichida sabr",
                content: `
                    <p>
                        Yusuf alayhissalom qissasi Qur’ondagi eng
                        ta’sirli qissalardan biridir.
                    </p>

                    <p>
                        Unda hasad, ayriliq, sinov, tuhmat, sabr,
                        poklik va oxir-oqibatdagi najot kabi
                        ko‘plab mavzular yoritiladi.
                    </p>

                    <blockquote>
                        “Kim taqvo qilsa va sabr qilsa, bas, albatta,
                        Alloh yaxshilik qiluvchilarning ajrini zoye
                        qilmaydi.”
                        <span class="source">
                            Qur’on, Yusuf surasi, 90-oyat
                        </span>
                    </blockquote>
                `
            },

            {
                id: 702,
                title: "Kechirish kuchi",
                content: `
                    <p>
                        Yusuf alayhissalomga zulm qilgan insonlar
                        keyinchalik uning oldida turishganida,
                        u kechirimlilik yo‘lini tanlagan.
                    </p>

                    <p>
                        Bu qissada g‘azab ustidan g‘alaba qilish,
                        Allohga tavakkul va kechirishning ulug‘ligi
                        haqida katta ibrat bor.
                    </p>
                `
            }

        ]
    }

];


/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
    {
        id: "ibodat",
        icon: "🤲",
        title: "Ibodat",
        description: "Allohga ibodat, namoz, ro‘za va zikr."
    },
    {
        id: "axloq",
        icon: "❤️",
        title: "Axloq",
        description: "Go‘zal xulq va insoniy fazilatlar."
    },
    {
        id: "qissa",
        icon: "📖",
        title: "Qissalar",
        description: "Payg‘ambarlar qissalaridan ibratlar."
    }
];


/* =========================================================
   WISDOM
========================================================= */

const wisdoms = [
    "Qalb xotirjamligi Allohni eslashdadir.",
    "Yaxshilikning kichigi ham qadrlidir.",
    "Sabr qiyinchilik ichida umidni saqlashdir.",
    "Bugungi yaxshi amal ertangi qalb xotirjamligiga sabab bo‘lishi mumkin.",
    "Ilm izlash insonni jaholatdan nur sari olib boradi.",
    "Shukr bor ne’matni qadrlashdan boshlanadi.",
    "Yaxshi so‘z ham sadaqadir.",
    "Allohdan umidni hech qachon uzmang."
];


/* =========================================================
   STORAGE
========================================================= */

const STORAGE_KEYS = {
    theme: "qalbgaNur_theme",
    bookmarks: "qalbgaNur_bookmarks",
    progress: "qalbgaNur_progress",
    fontSize: "qalbgaNur_fontSize",
    lastPage: "qalbgaNur_lastPage",
    wisdom: "qalbgaNur_wisdom"
};


/* =========================================================
   STATE
========================================================= */

const state = {

    currentChapterId: null,

    currentPageIndex: 0,

    fontSize: Number(
        localStorage.getItem(STORAGE_KEYS.fontSize)
    ) || 20,

    bookmarks: JSON.parse(
        localStorage.getItem(STORAGE_KEYS.bookmarks) || "[]"
    ),

    lastPage: JSON.parse(
        localStorage.getItem(STORAGE_KEYS.lastPage) || "null"
    ),

    progress: JSON.parse(
        localStorage.getItem(STORAGE_KEYS.progress) || "{}"
    )

};


/* =========================================================
   DOM
========================================================= */

const $ = (selector) =>
    document.querySelector(selector);

const $$ = (selector) =>
    document.querySelectorAll(selector);


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeTheme();

    initializeYear();

    initializeFontSize();

    renderCategories();

    renderFeaturedChapters();

    renderAllChapters();

    renderBookmarks();

    updateStats();

    setupNavigation();

    setupSearch();

    setupReaderControls();

    setupAudio();

    setupBackToTop();

    setupWisdom();

    setupMobileMenu();

    setupKeyboard();

    setupGlobalButtons();

    setTimeout(() => {

        const loading = $("#loadingScreen");

        if (loading) {
            loading.classList.add("hidden");
        }

    }, 500);

});


/* =========================================================
   THEME
========================================================= */

function initializeTheme() {

    const savedTheme =
        localStorage.getItem(STORAGE_KEYS.theme);

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

    }

    updateThemeButton();
}


function toggleTheme() {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        STORAGE_KEYS.theme,
        isDark ? "dark" : "light"
    );

    updateThemeButton();

    showToast(
        isDark
            ? "🌙 Tungi rejim yoqildi"
            : "☀️ Kunduzgi rejim yoqildi"
    );
}


function updateThemeButton() {

    const button = $("#themeBtn");

    if (!button) return;

    const isDark =
        document.body.classList.contains("dark");

    button.textContent =
        isDark ? "☀️" : "🌙";
}


/* =========================================================
   YEAR
========================================================= */

function initializeYear() {

    const year = $("#currentYear");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }
}


/* =========================================================
   CATEGORIES
========================================================= */

function renderCategories() {

    const container =
        $("#categoryGrid");

    if (!container) return;

    container.innerHTML =
        categories.map(category => `

            <button
                class="category-card"
                data-category="${escapeAttribute(category.id)}">

                <div class="category-icon">
                    ${category.icon}
                </div>

                <h3>
                    ${escapeHTML(category.title)}
                </h3>

                <p>
                    ${escapeHTML(category.description)}
                </p>

            </button>

        `).join("");

    container
        .querySelectorAll(".category-card")
        .forEach(card => {

            card.addEventListener("click", () => {

                const category =
                    card.dataset.category;

                showPage("chapters");

                filterChapters(category);

            });

        });
}


/* =========================================================
   FEATURED CHAPTERS
========================================================= */

function renderFeaturedChapters() {

    const container =
        $("#featuredGrid");

    if (!container) return;

    const featured =
        chapters.slice(0, 3);

    container.innerHTML =
        featured
            .map(createChapterCard)
            .join("");

    attachChapterCardEvents(container);
}


/* =========================================================
   ALL CHAPTERS
========================================================= */

function renderAllChapters(
    filteredChapters = chapters
) {

    const container =
        $("#allChaptersGrid");

    if (!container) return;

    if (!filteredChapters.length) {

        container.innerHTML = `
            <div class="empty-state">

                <div class="empty-icon">
                    🔎
                </div>

                <h3>
                    Hech narsa topilmadi
                </h3>

                <p>
                    Boshqa kategoriya yoki qidiruv so‘zini sinab ko‘ring.
                </p>

            </div>
        `;

        return;
    }

    container.innerHTML =
        filteredChapters
            .map(createChapterCard)
            .join("");

    attachChapterCardEvents(container);
}


/* =========================================================
   CHAPTER CARD
========================================================= */

function createChapterCard(chapter) {

    const totalPages =
        chapter.pages.length;

    return `

        <article
            class="chapter-card"
            data-chapter-id="${chapter.id}">

            <div class="chapter-number">
                ${chapter.id}
            </div>

            <div class="chapter-icon">
                ${chapter.icon}
            </div>

            <h3>
                ${escapeHTML(chapter.title)}
            </h3>

            <p>
                ${escapeHTML(chapter.description)}
            </p>

            <div class="chapter-meta">

                <span>
                    📄 ${totalPages} sahifa
                </span>

                <span>
                    ${getCategoryName(chapter.category)}
                </span>

            </div>

            <button
                class="chapter-open"
                data-open-chapter="${chapter.id}">

                📖 O‘qishni boshlash

            </button>

        </article>
    `;
}


function attachChapterCardEvents(container) {

    container
        .querySelectorAll("[data-open-chapter]")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.stopPropagation();

                const id =
                    Number(button.dataset.openChapter);

                openChapter(id);

            });

        });

}


/* =========================================================
   CATEGORY FILTER
========================================================= */

function filterChapters(category) {

    const filtered =
        chapters.filter(
            chapter =>
                chapter.category === category
        );

    renderAllChapters(filtered);

    const heading =
        document.querySelector("#chaptersPage .page-heading h1");

    if (heading) {

        heading.textContent =
            `${getCategoryName(category)} boblari`;

    }

}


/* =========================================================
   CHAPTER OPEN
========================================================= */

function openChapter(chapterId, pageIndex = 0) {

    const chapter =
        chapters.find(
            item => item.id === Number(chapterId)
        );

    if (!chapter) {

        showToast("❌ Bob topilmadi.");

        return;

    }

    state.currentChapterId =
        chapter.id;

    state.currentPageIndex =
        Math.max(
            0,
            Math.min(
                pageIndex,
                chapter.pages.length - 1
            )
        );

    saveLastPage();

    renderReader();

    document.body.classList.add("reader-open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   READER
========================================================= */

function renderReader() {

    const chapter =
        getCurrentChapter();

    if (!chapter) return;

    const page =
        chapter.pages[state.currentPageIndex];

    if (!page) return;

    hideAllMainPages();

    const reader =
        $("#readerPage");

    if (!reader) return;

    reader.classList.add("active");

    const chapterName =
        $("#readerChapterName");

    const category =
        $("#readerCategory");

    const title =
        $("#readerTitle");

    const body =
        $("#readerBody");

    if (chapterName) {

        chapterName.textContent =
            chapter.title;

    }

    if (category) {

        category.textContent =
            getCategoryName(chapter.category);

    }

    if (title) {

        title.textContent =
            page.title;

    }

    if (body) {

        body.innerHTML =
            page.content;

        body.style.fontSize =
            `${state.fontSize}px`;

    }

    updateReaderNavigation();

    updateBookmarkButton();

    updateProgress();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   CURRENT CHAPTER
========================================================= */

function getCurrentChapter() {

    return chapters.find(
        chapter =>
            chapter.id === state.currentChapterId
    );

}


/* =========================================================
   READER NAVIGATION
========================================================= */

function nextPage() {

    const chapter =
        getCurrentChapter();

    if (!chapter) return;

    if (
        state.currentPageIndex <
        chapter.pages.length - 1
    ) {

        state.currentPageIndex++;

        saveLastPage();

        markPageAsRead();

        renderReader();

        return;
    }

    const currentChapterIndex =
        chapters.findIndex(
            chapter =>
                chapter.id === state.currentChapterId
        );

    if (
        currentChapterIndex <
        chapters.length - 1
    ) {

        const nextChapter =
            chapters[currentChapterIndex + 1];

        openChapter(
            nextChapter.id,
            0
        );

        showToast(
            `📖 ${nextChapter.title} boshlandi`
        );

        return;
    }

    showToast(
        "🎉 Kitobning oxirgi sahifasiga yetdingiz!"
    );
}


function previousPage() {

    if (state.currentPageIndex > 0) {

        state.currentPageIndex--;

        saveLastPage();

        renderReader();

        return;
    }

    const currentChapterIndex =
        chapters.findIndex(
            chapter =>
                chapter.id === state.currentChapterId
        );

    if (currentChapterIndex > 0) {

        const previousChapter =
            chapters[currentChapterIndex - 1];

        openChapter(
            previousChapter.id,
            previousChapter.pages.length - 1
        );

        showToast(
            `📖 ${previousChapter.title} ga qaytdingiz`
        );

        return;
    }

    showToast(
        "Bu kitobning birinchi sahifasi."
    );
}


function updateReaderNavigation() {

    const chapter =
        getCurrentChapter();

    if (!chapter) return;

    const previous =
        $("#previousPageBtn");

    const next =
        $("#nextPageBtn");

    const indicator =
        $("#pageIndicator");

    if (previous) {

        previous.disabled =
            state.currentPageIndex === 0 &&
            chapters.findIndex(
                chapter =>
                    chapter.id === state.currentChapterId
            ) === 0;

    }

    if (next) {

        next.disabled =
            state.currentPageIndex ===
            chapter.pages.length - 1 &&
            chapters.findIndex(
                chapter =>
                    chapter.id === state.currentChapterId
            ) === chapters.length - 1;

    }

    if (indicator) {

        indicator.textContent =
            `${state.currentPageIndex + 1} / ${chapter.pages.length}`;

    }

}


/* =========================================================
   READER BACK
========================================================= */

function closeReader() {

    const reader =
        $("#readerPage");

    if (reader) {

        reader.classList.remove("active");

    }

    state.currentChapterId = null;

    hideAllMainPages();

    showPage("home");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   MAIN NAVIGATION
========================================================= */

function setupNavigation() {

    $$("[data-page]").forEach(button => {

        button.addEventListener("click", () => {

            const page =
                button.dataset.page;

            showPage(page);

            closeMobileMenu();

        });

    });

}


function showPage(pageName) {

    const reader =
        $("#readerPage");

    if (reader) {

        reader.classList.remove("active");

    }

    hideAllMainPages();

    const target =
        $(`#${pageName}Page`);

    if (target) {

        target.classList.add("active");

    }

    $$(".nav-link").forEach(link => {

        link.classList.toggle(
            "active",
            link.dataset.page === pageName
        );

    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (pageName === "bookmarks") {

        renderBookmarks();

    }

    if (pageName === "chapters") {

        renderAllChapters();

        const heading =
            document.querySelector(
                "#chaptersPage .page-heading h1"
            );

        if (heading) {

            heading.textContent =
                "Barcha boblar";

        }

    }

}


function hideAllMainPages() {

    $$(".page-section").forEach(section => {

        section.classList.remove("active");

    });

}


/* =========================================================
   GLOBAL BUTTONS
========================================================= */

function setupGlobalButtons() {

    const theme =
        $("#themeBtn");

    if (theme) {

        theme.addEventListener(
            "click",
            toggleTheme
        );

    }


    const start =
        $("#startReadingBtn");

    if (start) {

        start.addEventListener(
            "click",
            () => openChapter(chapters[0].id)
        );

    }


    const continueButton =
        $("#continueReadingBtn");

    if (continueButton) {

        continueButton.addEventListener(
            "click",
            continueReading
        );

    }


    const all =
        $("#allChaptersBtn");

    if (all) {

        all.addEventListener(
            "click",
            () => showPage("chapters")
        );

    }


    const brand =
        $("#brandHome");

    if (brand) {

        brand.addEventListener(
            "click",
            event => {

                event.preventDefault();

                showPage("home");

            }
        );

    }

}


/* =========================================================
   CONTINUE READING
========================================================= */

function continueReading() {

    if (
        state.lastPage &&
        state.lastPage.chapterId
    ) {

        openChapter(
            state.lastPage.chapterId,
            state.lastPage.pageIndex || 0
        );

        showToast(
            "▶️ O‘qishni davom ettirdingiz"
        );

        return;

    }

    openChapter(
        chapters[0].id,
        0
    );

}


/* =========================================================
   LAST PAGE
========================================================= */

function saveLastPage() {

    state.lastPage = {

        chapterId:
            state.currentChapterId,

        pageIndex:
            state.currentPageIndex

    };

    localStorage.setItem(
        STORAGE_KEYS.lastPage,
        JSON.stringify(state.lastPage)
    );

}


function markPageAsRead() {

    const chapter =
        getCurrentChapter();

    if (!chapter) return;

    const totalPages =
        chapters.reduce(
            (sum, item) =>
                sum + item.pages.length,
            0
        );

    const currentAbsolute =
        getAbsolutePageNumber();

    state.progress =
        Math.max(
            0,
            Math.min(
                100,
                Math.round(
                    (currentAbsolute / totalPages) * 100
                )
            )
        );

    localStorage.setItem(
        STORAGE_KEYS.progress,
        JSON.stringify(state.progress)
    );

    updateStats();

}


/* =========================================================
   ABSOLUTE PAGE
========================================================= */

function getAbsolutePageNumber() {

    let number = 0;

    for (const chapter of chapters) {

        if (
            chapter.id ===
            state.currentChapterId
        ) {

            number +=
                state.currentPageIndex + 1;

            break;

        }

        number +=
            chapter.pages.length;

    }

    return number;
}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

    const chapter =
        getCurrentChapter();

    if (!chapter) return;

    const totalPages =
        chapters.reduce(
            (sum, item) =>
                sum + item.pages.length,
            0
        );

    const currentPage =
        getAbsolutePageNumber();

    const percent =
        Math.round(
            (currentPage / totalPages) * 100
        );

    const bar =
        $("#readerProgressBar");

    if (bar) {

        bar.style.width =
            `${percent}%`;

    }

    state.progress = percent;

    localStorage.setItem(
        STORAGE_KEYS.progress,
        JSON.stringify(percent)
    );

    updateStats();

}


/* =========================================================
   STATS
========================================================= */

function updateStats() {

    const chapterCount =
        $("#chapterCount");

    const pageCount =
        $("#pageCount");

    const bookmarkCount =
        $("#bookmarkCount");

    const progressPercent =
        $("#progressPercent");

    const totalPages =
        chapters.reduce(
            (sum, chapter) =>
                sum + chapter.pages.length,
            0
        );

    if (chapterCount) {

        chapterCount.textContent =
            chapters.length;

    }

    if (pageCount) {

        pageCount.textContent =
            totalPages;

    }

    if (bookmarkCount) {

        bookmarkCount.textContent =
            state.bookmarks.length;

    }

    if (progressPercent) {

        const value =
            typeof state.progress === "number"
                ? state.progress
                : 0;

        progressPercent.textContent =
            `${value}%`;

    }

}


/* =========================================================
   BOOKMARK
========================================================= */

function getBookmarkKey() {

    if (state.currentChapterId === null) {
        return null;
    }

    return `${state.currentChapterId}-${state.currentPageIndex}`;

}


function isBookmarked() {

    const key =
        getBookmarkKey();

    return state.bookmarks.includes(key);

}


function toggleBookmark() {

    const key =
        getBookmarkKey();

    if (!key) return;

    if (isBookmarked()) {

        state.bookmarks =
            state.bookmarks.filter(
                item => item !== key
            );

        showToast(
            "🔖 Saqlanganlardan olib tashlandi"
        );

    } else {

        state.bookmarks.push(key);

        showToast(
            "🔖 Sahifa saqlandi"
        );

    }

    localStorage.setItem(
        STORAGE_KEYS.bookmarks,
        JSON.stringify(state.bookmarks)
    );

    updateBookmarkButton();

    renderBookmarks();

    updateStats();

}


function updateBookmarkButton() {

    const button =
        $("#readerBookmarkBtn");

    if (!button) return;

    const saved =
        isBookmarked();

    button.classList.toggle(
        "bookmarked",
        saved
    );

    button.textContent =
        saved ? "🔖" : "🔖";

    button.title =
        saved
            ? "Saqlangan"
            : "Saqlash";

}


/* =========================================================
   BOOKMARKS PAGE
========================================================= */

function renderBookmarks() {

    const container =
        $("#bookmarksGrid");

    if (!container) return;

    if (!state.bookmarks.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🔖
                </div>

                <h3>
                    Hozircha saqlangan sahifa yo‘q
                </h3>

                <p>
                    O‘qish vaqtida 🔖 tugmasini bosib
                    sahifalarni shu yerga saqlashingiz mumkin.
                </p>

            </div>

        `;

        return;
    }


    const cards =
        state.bookmarks
            .map(key => {

                const [chapterId, pageIndex] =
                    key.split("-").map(Number);

                const chapter =
                    chapters.find(
                        item =>
                            item.id === chapterId
                    );

                if (!chapter) return "";

                const page =
                    chapter.pages[pageIndex];

                if (!page) return "";

                return `

                    <article
                        class="bookmark-card">

                        <span class="eyebrow">
                            ${escapeHTML(
                                getCategoryName(
                                    chapter.category
                                )
                            )}
                        </span>

                        <h3>
                            ${escapeHTML(page.title)}
                        </h3>

                        <p>
                            ${stripHTML(
                                page.content
                            )}
                        </p>

                        <div class="bookmark-actions">

                            <button
                                data-read-bookmark="${key}">
                                📖 O‘qish
                            </button>

                            <button
                                data-delete-bookmark="${key}">
                                🗑 O‘chirish
                            </button>

                        </div>

                    </article>
                `;

            })
            .filter(Boolean)
            .join("");


    container.innerHTML =
        cards || `

            <div class="empty-state">
                🔖 Saqlangan sahifalar topilmadi.
            </div>

        `;


    container
        .querySelectorAll("[data-read-bookmark]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const [chapterId, pageIndex] =
                        button.dataset.readBookmark
                            .split("-")
                            .map(Number);

                    openChapter(
                        chapterId,
                        pageIndex
                    );

                }
            );

        });


    container
        .querySelectorAll("[data-delete-bookmark]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const key =
                        button.dataset.deleteBookmark;

                    state.bookmarks =
                        state.bookmarks.filter(
                            item => item !== key
                        );

                    localStorage.setItem(
                        STORAGE_KEYS.bookmarks,
                        JSON.stringify(
                            state.bookmarks
                        )
                    );

                    renderBookmarks();

                    updateStats();

                    showToast(
                        "🗑 Saqlangan sahifa o‘chirildi"
                    );

                }
            );

        });

}


/* =========================================================
   FONT SIZE
========================================================= */

function initializeFontSize() {

    document.documentElement
        .style.setProperty(
            "--reader-size",
            `${state.fontSize}px`
        );

}


function changeFontSize(amount) {

    state.fontSize += amount;

    state.fontSize =
        Math.max(
            15,
            Math.min(
                30,
                state.fontSize
            )
        );

    document.documentElement
        .style.setProperty(
            "--reader-size",
            `${state.fontSize}px`
        );

    localStorage.setItem(
        STORAGE_KEYS.fontSize,
        state.fontSize
    );

    const body =
        $("#readerBody");

    if (body) {

        body.style.fontSize =
            `${state.fontSize}px`;

    }

    showToast(
        `🔤 Shrift: ${state.fontSize}px`
    );

}


/* =========================================================
   FULLSCREEN
========================================================= */

async function toggleFullscreen() {

    try {

        if (!document.fullscreenElement) {

            await document.documentElement
                .requestFullscreen();

            showToast(
                "⛶ To‘liq ekran yoqildi"
            );

        } else {

            await document.exitFullscreen();

            showToast(
                "⛶ To‘liq ekran yopildi"
            );

        }

    } catch (error) {

        showToast(
            "⚠️ Fullscreen brauzer tomonidan qo‘llab-quvvatlanmadi."
        );

    }

}


/* =========================================================
   READER CONTROLS
========================================================= */

function setupReaderControls() {

    const next =
        $("#nextPageBtn");

    const previous =
        $("#previousPageBtn");

    const back =
        $("#readerBackBtn");

    const bookmark =
        $("#readerBookmarkBtn");

    const decrease =
        $("#fontDecrease");

    const increase =
        $("#fontIncrease");

    const fullscreen =
        $("#fullscreenBtn");


    if (next) {

        next.addEventListener(
            "click",
            nextPage
        );

    }

    if (previous) {

        previous.addEventListener(
            "click",
            previousPage
        );

    }

    if (back) {

        back.addEventListener(
            "click",
            closeReader
        );

    }

    if (bookmark) {

        bookmark.addEventListener(
            "click",
            toggleBookmark
        );

    }

    if (decrease) {

        decrease.addEventListener(
            "click",
            () => changeFontSize(-1)
        );

    }

    if (increase) {

        increase.addEventListener(
            "click",
            () => changeFontSize(1)
        );

    }

    if (fullscreen) {

        fullscreen.addEventListener(
            "click",
            toggleFullscreen
        );

    }

}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

    const searchButton =
        $("#searchBtn");

    const overlay =
        $("#searchOverlay");

    const close =
        $("#closeSearch");

    const input =
        $("#searchInput");


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            openSearch
        );

    }

    if (close) {

        close.addEventListener(
            "click",
            closeSearch
        );

    }

    if (input) {

        input.addEventListener(
            "input",
            () => {

                performSearch(
                    input.value.trim()
                );

            }
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            event => {

                if (
                    event.target === overlay
                ) {

                    closeSearch();

                }

            }
        );

    }

}


function openSearch() {

    const overlay =
        $("#searchOverlay");

    const input =
        $("#searchInput");

    if (!overlay) return;

    overlay.classList.add("open");

    document.body.classList.add(
        "no-scroll"
    );

    if (input) {

        setTimeout(
            () => input.focus(),
            100
        );

    }

}


function closeSearch() {

    const overlay =
        $("#searchOverlay");

    const input =
        $("#searchInput");

    if (overlay) {

        overlay.classList.remove("open");

    }

    document.body.classList.remove(
        "no-scroll"
    );

    if (input) {

        input.value = "";

    }

    const results =
        $("#searchResults");

    if (results) {

        results.innerHTML = "";

    }

}


function performSearch(query) {

    const results =
        $("#searchResults");

    if (!results) return;

    if (!query) {

        results.innerHTML = "";

        return;

    }

    const lower =
        query.toLocaleLowerCase("uz");

    const found = [];


    chapters.forEach(chapter => {

        chapter.pages.forEach(
            (page, pageIndex) => {

                const text =
                    stripHTML(
                        page.content
                    );

                const searchable =
                    (
                        chapter.title +
                        " " +
                        chapter.description +
                        " " +
                        page.title +
                        " " +
                        text
                    ).toLocaleLowerCase("uz");


                if (
                    searchable.includes(lower)
                ) {

                    found.push({
                        chapter,
                        page,
                        pageIndex,
                        text
                    });

                }

            }
        );

    });


    if (!found.length) {

        results.innerHTML = `

            <div class="search-empty">

                🔎 “${escapeHTML(query)}”
                bo‘yicha hech narsa topilmadi.

            </div>

        `;

        return;

    }


    results.innerHTML =
        found
            .slice(0, 20)
            .map(item => `

                <button
                    class="search-result"
                    data-search-chapter="${item.chapter.id}"
                    data-search-page="${item.pageIndex}">

                    <strong>
                        ${escapeHTML(
                            item.page.title
                        )}
                    </strong>

                    <span>
                        ${escapeHTML(
                            item.chapter.title
                        )}
                        ·
                        ${escapeHTML(
                            truncate(item.text, 110)
                        )}
                    </span>

                </button>

            `)
            .join("");


    results
        .querySelectorAll(
            "[data-search-chapter]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const chapterId =
                        Number(
                            button.dataset.searchChapter
                        );

                    const pageIndex =
                        Number(
                            button.dataset.searchPage
                        );

                    closeSearch();

                    openChapter(
                        chapterId,
                        pageIndex
                    );

                }
            );

        });

}


/* =========================================================
   AUDIO
========================================================= */

function setupAudio() {

    const audio =
        $("#quranAudio");

    const play =
        $("#audioPlayBtn");

    const progress =
        $("#audioProgress");

    const volume =
        $("#audioVolume");

    const current =
        $("#audioCurrentTime");

    const duration =
        $("#audioDuration");


    if (!audio) return;


    /*
       Mishary Rashid Alafasy
       Ya-Sin / Surah 36

       External MP3 source.
    */

    audio.src =
        "https://server8.mp3quran.net/afs/036.mp3";

    audio.volume = 1;


    if (play) {

        play.addEventListener(
            "click",
            async () => {

                try {

                    if (audio.paused) {

                        await audio.play();

                    } else {

                        audio.pause();

                    }

                } catch (error) {

                    showToast(
                        "⚠️ Audio yuklanmadi. Internet aloqasini tekshiring."
                    );

                }

            }
        );

    }


    audio.addEventListener(
        "play",
        () => {

            if (play) {
                play.textContent = "⏸";
            }

        }
    );


    audio.addEventListener(
        "pause",
        () => {

            if (play) {
                play.textContent = "▶";
            }

        }
    );


    audio.addEventListener(
        "loadedmetadata",
        () => {

            if (duration) {

                duration.textContent =
                    formatTime(
                        audio.duration
                    );

            }

        }
    );


    audio.addEventListener(
        "timeupdate",
        () => {

            if (
                progress &&
                Number.isFinite(audio.duration)
            ) {

                progress.value =
                    (
                        audio.currentTime /
                        audio.duration
                    ) * 100;

            }

            if (current) {

                current.textContent =
                    formatTime(
                        audio.currentTime
                    );

            }

        }
    );


    if (progress) {

        progress.addEventListener(
            "input",
            () => {

                if (
                    !Number.isFinite(
                        audio.duration
                    )
                ) return;

                audio.currentTime =
                    (
                        Number(progress.value) /
                        100
                    ) * audio.duration;

            }
        );

    }


    if (volume) {

        volume.addEventListener(
            "input",
            () => {

                audio.volume =
                    Number(volume.value);

            }
        );

    }


    audio.addEventListener(
        "error",
        () => {

            showToast(
                "⚠️ Audio manbasi vaqtincha ochilmadi."
            );

        }
    );

}


function formatTime(seconds) {

    if (
        !Number.isFinite(seconds) ||
        seconds < 0
    ) {

        return "0:00";

    }

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        Math.floor(seconds % 60)
            .toString()
            .padStart(2, "0");

    return `${minutes}:${secs}`;

}


/* =========================================================
   WISDOM
========================================================= */

function setupWisdom() {

    const button =
        $("#newWisdomBtn");

    const saved =
        Number(
            localStorage.getItem(
                STORAGE_KEYS.wisdom
            )
        );

    if (
        Number.isInteger(saved) &&
        saved >= 0 &&
        saved < wisdoms.length
    ) {

        renderWisdom(saved);

    } else {

        renderWisdom(
            Math.floor(
                Math.random() *
                wisdoms.length
            )
        );

    }


    if (button) {

        button.addEventListener(
            "click",
            () => {

                let index =
                    Math.floor(
                        Math.random() *
                        wisdoms.length
                    );

                renderWisdom(index);

                showToast(
                    "💡 Yangi hikmat"
                );

            }
        );

    }

}


function renderWisdom(index) {

    const text =
        $("#wisdomText");

    if (!text) return;

    text.textContent =
        wisdoms[index];

    localStorage.setItem(
        STORAGE_KEYS.wisdom,
        index
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const button =
        $("#mobileMenuBtn");

    const nav =
        $("#mainNav");

    if (!button || !nav) return;

    button.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "open"
            );

        }
    );

}


function closeMobileMenu() {

    const nav =
        $("#mainNav");

    if (nav) {

        nav.classList.remove(
            "open"
        );

    }

}


/* =========================================================
   KEYBOARD
========================================================= */

function setupKeyboard() {

    document.addEventListener(
        "keydown",
        event => {

            const reader =
                $("#readerPage");

            const readerOpen =
                reader &&
                reader.classList.contains(
                    "active"
                );


            /*
               ESC
            */

            if (event.key === "Escape") {

                const search =
                    $("#searchOverlay");

                if (
                    search &&
                    search.classList.contains("open")
                ) {

                    closeSearch();

                    return;

                }

                if (readerOpen) {

                    closeReader();

                    return;

                }

            }


            if (!readerOpen) return;


            /*
               Space = next page
            */

            if (
                event.code === "Space" &&
                !isTypingElement(event.target)
            ) {

                event.preventDefault();

                nextPage();

            }


            /*
               Arrow Right
            */

            if (
                event.key === "ArrowRight" &&
                !isTypingElement(event.target)
            ) {

                nextPage();

            }


            /*
               Arrow Left
            */

            if (
                event.key === "ArrowLeft" &&
                !isTypingElement(event.target)
            ) {

                previousPage();

            }


            /*
               B = bookmark
            */

            if (
                event.key.toLowerCase() === "b" &&
                !isTypingElement(event.target)
            ) {

                toggleBookmark();

            }

        }
    );

}


/* =========================================================
   BACK TO TOP
========================================================= */

function setupBackToTop() {

    const button =
        $("#backToTopBtn");

    if (!button) return;


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 450) {

                button.classList.add("show");

            } else {

                button.classList.remove("show");

            }

        },
        { passive: true }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer = null;

function showToast(message) {

    const toast =
        $("#toast");

    if (!toast) return;

    toast.textContent =
        message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   HELPERS
========================================================= */

function getCategoryName(category) {

    const found =
        categories.find(
            item =>
                item.id === category
        );

    return found
        ? found.title
        : category;

}


function stripHTML(html) {

    const temp =
        document.createElement("div");

    temp.innerHTML =
        html || "";

    return (
        temp.textContent ||
        temp.innerText ||
        ""
    ).replace(
        /\s+/g,
        " "
    ).trim();

}


function truncate(text, length) {

    if (!text) return "";

    if (text.length <= length) {
        return text;
    }

    return (
        text.substring(0, length)
        .trim() +
        "..."
    );

}


function escapeHTML(value) {

    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


function escapeAttribute(value) {

    return escapeHTML(value);

}


function isTypingElement(element) {

    if (!element) return false;

    const tag =
        element.tagName?.toLowerCase();

    return (
        tag === "input" ||
        tag === "textarea" ||
        tag === "select" ||
        element.isContentEditable
    );

}


/* =========================================================
   ERROR PROTECTION
========================================================= */

window.addEventListener(
    "error",
    event => {

        console.error(
            "Qalbga Nur:",
            event.error || event.message
        );

    }
);


/* =========================================================
   FINAL SAFETY
========================================================= */

window.QalbgaNur = {

    chapters,

    state,

    openChapter,

    nextPage,

    previousPage,

    toggleBookmark,

    toggleTheme,

    showPage,

    continueReading

};
