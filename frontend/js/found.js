async function submitFound() {
  const itemName = document.getElementById("f-title").value.trim();
  const category = document.getElementById("f-category").value.trim();
  const description = document.getElementById("f-description").value.trim();
  const keywords = document.getElementById("f-keywords").value.trim();
  const dateFound = document.getElementById("f-dateFound").value;
  const location = document.getElementById("f-location").value.trim();
  const image = document.getElementById("f-image").files[0];

  if (!itemName || !category || !dateFound || !location) {
    document.getElementById("foundMsg").innerText = "Please fill all required fields";
    return;
  }

  let formData = new FormData();
  formData.append("itemName", itemName);
  formData.append("category", category);
  formData.append("description", description);
  formData.append("keywords", keywords);
  formData.append("dateFound", dateFound);
  formData.append("location", location);
  if (image) formData.append("image", image);

  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/api/found`, {
    method: "POST",
    headers: { "Authorization": `Bearer ${token}` },
    body: formData
  });

  const data = await res.json();

  if (data.message === "Found item submitted successfully" || data.data) {
    document.getElementById("foundMsg").style.color = "#34d399";
    document.getElementById("foundMsg").innerText = "Found item submitted successfully ✅";
    setTimeout(() => window.location.href = "history.html", 1500);
  } else {
    document.getElementById("foundMsg").style.color = "#f87171";
    document.getElementById("foundMsg").innerText = data.message;
  }
}