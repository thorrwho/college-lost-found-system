async function submitLost() {
  const itemName = document.getElementById("l-title").value.trim();
  const category = document.getElementById("l-category").value.trim();
  const description = document.getElementById("l-description").value.trim();
  const keywords = document.getElementById("l-keywords").value.trim();
  const dateLost = document.getElementById("l-dateLost").value;
  const location = document.getElementById("l-location").value.trim();
  const image = document.getElementById("l-image").files[0];

  if (!itemName || !category || !dateLost || !location) {
    document.getElementById("submitMsg").innerText = "Please fill all required fields";
    return;
  }

  let formData = new FormData();
  formData.append("itemName", itemName);
  formData.append("category", category);
  formData.append("description", description);
  formData.append("keywords", keywords);
  formData.append("dateLost", dateLost);
  formData.append("location", location);
  if (image) formData.append("image", image);

  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/api/lost`, {
    method: "POST",
    headers: { "Authorization": `Bearer ${token}` },
    body: formData
  });

  const data = await res.json();

  if (data.message === "Lost item submitted successfully" || data.data) {
    document.getElementById("submitMsg").style.color = "#34d399";
    document.getElementById("submitMsg").innerText = "Lost item submitted successfully ✅";
    setTimeout(() => window.location.href = "history.html", 1500);
  } else {
    document.getElementById("submitMsg").style.color = "#f87171";
    document.getElementById("submitMsg").innerText = data.message;
  }
}