// ========================
// Fungsi untuk localStorage
// ========================

// Menyimpan data buku ke localStorage
function saveBooks(buku) {
  localStorage.setItem("buku", JSON.stringify(buku));
}

// Mengambil data buku dari localStorage
function getBooks() {
  return JSON.parse(localStorage.getItem("buku")) || [];
}

// ========================
// Fungsi untuk Menambahkan Buku Baru
// ========================

function addBooks(event) {
  event.preventDefault();

  // Mengambil nilai dari form
  const title = document.getElementById("bookFormTitle").value.trim();
  const author = document.getElementById("bookFormAuthor").value.trim();
  const year = parseInt(document.getElementById("bookFormYear").value);
  const isComplete = document.getElementById("bookFormIsComplete").checked;

  // Validasi input
  if (!title || !author || isNaN(year)) {
    alert("Harap isi semua field dengan benar!");
    return;
  }

  // Object buku baru
  const newBook = {
    id: Date.now(), // id unik
    title,
    author,
    year,
    isComplete,
  };

  // Simpan buku ke localStorage
  const buku = getBooks();
  buku.push(newBook);
  saveBooks(buku);

  // Render ulang daftar buku
  renderBooks();

  // Reset form
  event.target.reset();
}

// ========================
// Fungsi untuk Menampilkan Buku di Rak
// ========================

function renderBooks() {
  const books = getBooks();
  const incompleteList = document.getElementById("incompleteBookList");
  const completeList = document.getElementById("completeBookList");

  // Kosongkan rak buku
  incompleteList.innerHTML = "";
  completeList.innerHTML = "";

  // Loop melalui setiap buku
  books.forEach((buku) => {
    const bukuElement = document.createElement("div");
    bukuElement.setAttribute("data-bookid", buku.id);
    bukuElement.setAttribute("data-testid", "bookItem");
    bukuElement.classList.add("book-item");
    bukuElement.innerHTML = `
      <h3 data-testid="bookItemTitle">${buku.title}</h3>
      <p data-testid="bookItemAuthor">Penulis: ${buku.author}</p>
      <p data-testid="bookItemYear">Tahun: ${buku.year}</p>
      <div>
        <button data-testid="bookItemIsCompleteButton">
          ${buku.isComplete ? "Belum selesai dibaca" : "Selesai dibaca"}
        </button>
        <button data-testid="bookItemDeleteButton">Hapus Buku</button>
      </div>
    `;

    // Tambahkan buku ke rak yang sesuai
    if (buku.isComplete) {
      completeList.appendChild(bukuElement);
    } else {
      incompleteList.appendChild(bukuElement);
    }
  });
}

// ========================
// Fungsi untuk Memindahkan Buku Antar Rak
// ========================

function toggleStatus(bookId) {
  const books = getBooks();
  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex !== -1) {
    books[bookIndex].isComplete = !books[bookIndex].isComplete;
    saveBooks(books);
    renderBooks();
  }
}

// ========================
// Fungsi untuk Menghapus Buku
// ========================

function deleteBook(bookId) {
  const isConfirmed = confirm("Apakah Anda yakin ingin menghapus buku ini?");
  if (!isConfirmed) return;

  const books = getBooks().filter((book) => book.id !== bookId);
  saveBooks(books);
  renderBooks();
}

// ========================
// Event Listeners
// ========================

// Form tambah buku
document.getElementById("bookForm").addEventListener("submit", addBooks);

// Event delegation untuk tombol di buku
document.addEventListener("click", (event) => {
  const bookId = parseInt(
    event.target.closest("[data-bookid]")?.getAttribute("data-bookid")
  );

  if (!bookId) return;

  const action = event.target.getAttribute("data-testid");

  switch (action) {
    case "bookItemIsCompleteButton":
      toggleStatus(bookId);
      break;
    case "bookItemDeleteButton":
      deleteBook(bookId);
      break;
    default:
      break;
  }
});

// Render buku saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  renderBooks(); // bagian yang sudah do perbaiki
});
