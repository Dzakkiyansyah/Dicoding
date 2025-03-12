function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else {
    const arr = fibonacci(n - 1);
    return [...arr, arr[n - 2] + arr[n - 3] || 1];
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
