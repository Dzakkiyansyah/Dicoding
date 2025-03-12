// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
const orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  // menghitung total harga
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  // membuat order baru
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: "Menunggu",
  };

  // menambhakan order baru ke dalam array orders
  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  // mencari order berdasarkan id
  const order = orders.find((order) => order.id === orderId);

  // jika order tidak ditemukan
  if (!order) {
    return "Order tidak ditemukan";
  }

  // mengubah status order
  order.status = status;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  // menghitung total revenue
  const totalRevenue = orders
    .filter((order) => order.status === "Selesai")
    .reduce((sum, order) => sum + order.totalPrice, 0);

  return totalRevenue;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  // mencari index order berdasarkan id
  const index = orders.findIndex((order) => order.id === id);

  // jika order tidak ditemukan
  if (index === -1) {
    return "Order tidak ditemukan";
  }

  // menghapus order dari array orders
  orders.splice(index, 1);
}

export {
  addOrder,
  calculateTotalRevenue,
  deleteOrder,
  orders,
  updateOrderStatus,
};
