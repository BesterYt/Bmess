const SERVER_URL = "https://bmessange.ivantimockin19.workers.dev";

async function checkUser(id) {
  const res = await fetch(`${SERVER_URL}/checkUser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  const data = await res.json();
  return data.exists;
}

async function getChats(id) {
  const res = await fetch(`${SERVER_URL}/getChats`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  return await res.json();
}

async function createChat(id, withId) {
  const res = await fetch(`${SERVER_URL}/createChat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, withId }),
  });
  return await res.json();
}

async function sendMessage(id, chatId, message) {
  const res = await fetch(`${SERVER_URL}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, chatId, message }),
  });
  return await res.json();
}
