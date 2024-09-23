let currentPage = 1;
const totalPages = 4;

function openBook() {
    const book = document.getElementById("book");
    book.classList.add("open");
    flipPage();
}

function flipPage() {
    if (currentPage <= totalPages) {
        const pageId = `page${currentPage}`;
        const page = document.getElementById(pageId);
        page.style.transform = `rotateY(${currentPage * 180}deg)`;
        currentPage++;
    }
}
