function findUser() {
  let username = document.getElementById("username").value;
  let result = document.getElementById("result");

  if (username === "") {
    result.innerHTML = "<p>Please enter a username</p>";
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      if (data.message === "Not Found") {
        result.innerHTML = "<p>User not found </p>";
      } else {
        result.innerHTML = `
          <img src="${data.avatar_url}" width="120">
          <p><strong>${data.name || "No Name"}</strong></p>
          <p>@${data.login}</p>
          <p>${data.bio || "No bio available"}</p>
          <p>Followers: ${data.followers}</p>
          <p>Repos: ${data.public_repos}</p>
          <a href="${data.html_url}" target="_blank">View Profile</a>
        `;
      }
    })
    .catch(() => {
      result.innerHTML = "<p>Something went wrong </p>";
    });
}
