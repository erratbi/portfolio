export const uncloak = (el) => {
  if (typeof el === "string") el = document.querySelector(el);
  if (!el) return;
  const cloaked = el.querySelectorAll(".cloak");
  cloaked.forEach((el) => el.classList.remove("cloak"));
};
