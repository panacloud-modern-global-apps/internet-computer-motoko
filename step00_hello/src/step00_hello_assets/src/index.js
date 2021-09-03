import { step00_hello } from "../../declarations/step00_hello";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with step00_hello actor, calling the greet method
  const greeting = await step00_hello.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
