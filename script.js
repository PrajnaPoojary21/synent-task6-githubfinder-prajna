const searchBtn = document.getElementById("searchBtn");
const profile = document.getElementById("profile");

searchBtn.addEventListener("click", async () => {
  const username =
    document.getElementById("username").value.trim();

  if (username === "") {
    alert("Please enter a GitHub username");
    return;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}`
    );
    const data = await response.json();
    profile.innerHTML = `
      <img src="${data.avatar_url}" alt="Profile Picture" width="150">
      <h2>${data.name || data.login}</h2>
      <p>${data.bio || "No bio available"}</p>
      <p><strong>Followers:</strong> ${data.followers}</p>
      <p><strong>Following:</strong> ${data.following}</p>
      <p><strong>Repositories:</strong> ${data.public_repos}</p>
    `;
  } catch (error) {
    console.log("Error:", error);
  }
});